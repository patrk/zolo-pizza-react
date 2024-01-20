import React from 'react'
import styled from 'styled-components'
import Logo from '../../Logo'
import IconButton from './IconButton'
import { X, Home, Feather } from 'react-feather'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'
import { useMediaQuery } from 'react-responsive'
import ClickAwayListener from 'react-click-away-listener'

const StyledAside = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    z-index: 11;
    background: rgb(120,80,0);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    @media screen and (max-width: 1020px){
        transition: transform 0.5s;
        transform: ${props => props.active ? 'translateX(0)' : 'translateX(-100%)'};
    }
    overflow-y: auto;
`

const TopButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 1020px){
        justify-content: space-between;
    }
    width: 100%;
`

const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 1.8em;
    color: ${props => props.theme.textPrimary || "unset"};
    font-style: italic;
    margin: 6px 0px;
    opacity: .6;
`

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
`

const StyledFeather = styled(Feather)`
    padding-right: 6px;
`

/* const AsideFooter = styled.div`
    width: 100%;
    vertical-align: bottom;
    display: flex;
    align-items: center;
    justify-content:center;
` */

const Aside = props => {
    const max1020 = useMediaQuery({ query: "(max-width: 1020px)" })
    return (
        <ClickAwayListener onClickAway={() => props.active && props.onClose()}>
            <StyledAside {...props}>
                <TopButtons>
                    {max1020 &&
                        <IconButton title="Schließen" onClick={props.onClose}>
                            <X />
                        </IconButton>
                    }
                    <Link to="/">
                        <IconButton title="Startseite">
                            <Home />
                        </IconButton>
                    </Link>
                </TopButtons>
                <header>
                    <Link to="/">
                        <LogoWrapper>
                            <Logo show width="75%" />
                        </LogoWrapper>
                    </Link>
                    <Title>Speisekarte</Title>
                </header>
                <MenuWrapper>
                    <MenuButton type="alles" {...props}>
                        Alles
                    </MenuButton>
                    <MenuButton type="pizza" {...props}>
                        Pizza
                    </MenuButton>
                    <MenuButton type="pizza bianca" {...props}>
                        Pizza Bianca
                    </MenuButton>
                    <MenuButton type="pizza speciale" {...props}>
                        Pizza Speciale
                    </MenuButton>
                    <MenuButton type="vegetarier" {...props}>
                        <StyledFeather color="lightgreen" />Vegetarier
                    </MenuButton>
                    {/* <MenuButton type="getränke" {...props}>
                        Getränke
                    </MenuButton>
                    <MenuButton type="kam" {...props}>
                        Kam
                    </MenuButton> */}
                </MenuWrapper>
            </StyledAside>
        </ClickAwayListener>
    )
}
export default Aside
