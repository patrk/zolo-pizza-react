import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Year from '../Year'
import { useMediaQuery } from 'react-responsive'
// import nevatic from '../../images/nevatic_logo.png'
import { Link as RouterLink } from 'react-router-dom'

const Div = styled.div`
    width: 100%;
    height: 480px;
    background: rgb(120,80,0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const P = styled.p`
    font-size: 2em;
    color: ${props => props.theme.textPrimary || "white"};
    @media screen and (max-width: 700px){
        font-size: 1.2em;
    }
`

const LogoWrapper = styled.div`
    width: 240px;
    padding: 20px 0px;
`

const LogoNevatic = styled.img`
    width: 200px;
    margin-left: 10px;
`

const A = styled.a`
    color: white;
    text-decoration: none;
    font-size: 2em;
`

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledRouterLink = styled(RouterLink)`
    color: ${props => props.theme.textPrimary || "black"};
    &:hover{
        color: white;
    }
`

const Footer = props => {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    return (
        <Div>
            <LogoWrapper>
                <RouterLink to="/"><Logo width={isMobile ? "120px" : "250px"} show /></RouterLink>
            </LogoWrapper>
            <P>© <Year /> Solo Pizza | <StyledRouterLink to="/impressum">Impressum</StyledRouterLink></P>
            <Center><A target="_blank" href="https://nevatic.com">By  Nevatic</A></Center>
        </Div>
    )
}
export default Footer