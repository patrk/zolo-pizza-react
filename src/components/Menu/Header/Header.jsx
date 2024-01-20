import React from 'react'
import styled from 'styled-components'
import Burger from '../../Home/MobileMenu/Burger'
import MiniLogo from '../../MiniLogo'
import TextLogo from '../../../images/logo_text.png'
import { Link } from 'react-router-dom'

const Wrapper = styled.header`
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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
    padding-right: 20px;
`
const Img = styled.img`
    width: 150px;
    padding-left: 10px;
`

const Header = props => {
    return(
        <Wrapper>
            <Div>
                <WrapperSide>
                    <Burger small {...props} menu/>
                </WrapperSide>
                <WrapperLogoText>
                    <MiniLogo width="50px" padding="5px 0px 0px 0px" />
                    <Link to="/"><Img src={TextLogo} alt="Solo Pizza" /></Link>
                </WrapperLogoText>
            </Div>
        </Wrapper>
    )
}

export default Header