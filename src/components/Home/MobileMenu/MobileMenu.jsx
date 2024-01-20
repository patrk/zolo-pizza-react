import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import MiniLogo from '../../MiniLogo'
import TextLogo from '../../../images/logo_text.png'
import MobileMenuItem from './MobileMenuItem'
import CoverButton from '../CoverButton'
import SocialMenuItem from '../SocialMenu/SocialMenuItem'
import { Instagram, Facebook, Mail } from 'react-feather'

const Wrapper = styled.div`
    width: 100%;
    height: ${props => props.menuActive ? "100%" : props.scrolled ? "60px" : "0px"};
    overflow: hidden;
    background: rgb(239,215,151);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: height .5s;
`

const Div = styled.div`
    background: rgb(120,80,0);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const WrapperSide = styled.div`
    width: 75px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const WrapperLogoText = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 150px;
`

const WrapperMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
`

const WrapperExtra = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 0px;
`

const WrapperSocialMedia = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 0px;
`
const ScrollDiv = styled.div`
    overflow-y: ${props => props.menuActive ? 'auto' : 'hidden'};
    overflow-x: hidden;
    width: 100%;
    height: 100%;
`

const MobileMenu = props => {
    return (
        <Wrapper {...props}>
            <ScrollDiv {...props}>
                <Div>
                    <WrapperSide>
                        <MiniLogo width="50px" />
                    </WrapperSide>
                    <WrapperLogoText>
                        <Img src={TextLogo} alt="Solo Pizza" />
                    </WrapperLogoText>
                    <WrapperSide>
                        <Burger small {...props} />
                    </WrapperSide>
                </Div>
                <WrapperMenu>
                    <MobileMenuItem to="1" {...props}>
                        Home
                    </MobileMenuItem>
                    <MobileMenuItem to="2" {...props}>
                        Über uns
                    </MobileMenuItem>
                    <MobileMenuItem to="3" {...props}>
                        Standort
                    </MobileMenuItem>
                    <MobileMenuItem to="4" {...props}>
                        Kontakt
                    </MobileMenuItem>
                </WrapperMenu>
                <WrapperExtra>
                    <CoverButton router to="/speisekarte">
                        Speisekarte
                    </CoverButton>
                </WrapperExtra>
                <WrapperSocialMedia>
                    <SocialMenuItem horizontal href="https://instagram.com/solopizzaspandau">
                        <Instagram size={36} />
                    </SocialMenuItem>
                    <SocialMenuItem horizontal href="https://facebook.com/solopizzaspandau">
                        <Facebook size={36} />
                    </SocialMenuItem>
                    <SocialMenuItem horizontal href="mailto:info@solopizza.berlin">
                        <Mail size={36} />
                    </SocialMenuItem>
                </WrapperSocialMedia>
            </ScrollDiv>
        </Wrapper>
    )
}
export default MobileMenu