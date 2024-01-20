import React from 'react'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import styled from 'styled-components'
import BackgroundLogo from './components/BackgroundLogo'
import Fade from 'react-reveal/Fade'
import { Mail, User, Instagram, Facebook } from 'react-feather'
import SocialMenuItem from '../SocialMenu/SocialMenuItem'
import CoverButton from '../CoverButton'
import { useMediaQuery } from 'react-responsive'

const PhoneNumber = styled.p`
    font-size: 6em;
    margin: 20px 0px;
    color: rgb(120,80,0);
    @media screen and (max-width: 900px){
        font-size: 2.3em;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 72%;
    @media screen and (max-width: 900px){
        flex-direction: column;
        width: 80%;
    }
`

const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const H3 = styled.h3`
    font-size: 2.5em;
    color: ${props => props.theme.textPrimary || "unset"};
    text-transform: uppercase;
    margin: 40px 0px 20px 0px;
    @media screen and (max-width: 900px){
        font-size: 1.8em;
    }
`

const P = styled.p`
    font-size: 2em;
    margin: 8px 0px;
    @media screen and (max-width: 900px){
        font-size: 1.4em;
    }
`

const A = styled.a`
    text-decoration: none;
    transition: color .3s;
    color: rgb(120,80,0);
    &:hover{
        color: ${props => props.theme.textPrimary || "black"};
    }
`

const Contact = props => {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
    return (
        <Wrapper>
            <BackgroundLogo bottom right />
            <Title>Kontakt</Title>
            <Fade top cascade><PhoneNumber>030 - 36 43 38 88</PhoneNumber></Fade>
            {isMobile && <CoverButton href="tel:+493036433888">Jetzt Anrufen</CoverButton>}
            <Div>
                <div>
                    <H3>
                        <Fade top cascade>
                            E-Mail
                        </Fade>
                    </H3>
                    <Fade bottom>
                        <P><A href="mailto:info@solopizza.berlin">info@solopizza.berlin</A></P>
                    </Fade>
                </div>
                <div>
                    <H3>
                        <Fade top cascade>
                            Sozialen Medien
                        </Fade>
                    </H3>
                    <HorizontalDiv>
                        <Fade bottom cascade>
                            <SocialMenuItem horizontal href="https://instagram.com/solopizzaspandau">
                                <Instagram size={36} />
                            </SocialMenuItem>
                            <SocialMenuItem horizontal href="https://facebook.com/solopizzaspandau">
                                <Facebook size={36} />
                            </SocialMenuItem>
                        </Fade>
                    </HorizontalDiv>
                </div>
            </Div>
        </Wrapper>
    )
}
export default Contact