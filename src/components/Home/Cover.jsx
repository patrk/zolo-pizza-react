import React from 'react'
import styled from 'styled-components'
import background from '../../images/background.jpg'
import Logo from '../Logo'
import { Parallax } from 'react-parallax'
import CoverButton from './CoverButton'
import Burger from './MobileMenu/Burger'
import { useMediaQuery } from 'react-responsive'

const Section = styled.section`
    min-height: 100vh;
`
const Background = styled(Parallax)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(25%);
`
const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 760px;
    margin: 15px 0px;
    @media screen and (max-width: 900px){
        flex-direction: column;
        width: 100%;
    }
`

const Wrapper = styled.div`
    /* min-height: 500px; */
`

const Cover = props => {

    let isMobile = useMediaQuery({ query: '(max-width: 900px)' })
    return (
        <Section>
            <Wrapper>
                <Background bgImage={background} bgImageAlt="Logo" bgStyle={{ filter: 'brightness(25%)' }} strength={600}>
                    <div style={{ height: '100vh' }} />
                </Background>
                <Div>
                    <Logo width="600" show shadow />
                    {isMobile && <Burger absolute {...props} />}
                    <Flex>
                        <CoverButton router to="/speisekarte">
                            Speisekarte
                        </CoverButton>
                        <CoverButton to="4">
                            Kontakt
                        </CoverButton>
                    </Flex>
                </Div>
            </Wrapper>
        </Section>
    )
}
export default Cover