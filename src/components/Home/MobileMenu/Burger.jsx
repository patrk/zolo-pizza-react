import React from 'react'
import { Menu, X } from 'react-feather'
import styled, { css } from 'styled-components'

const Button = styled.button`
    border-radius: 50%;
    padding: ${props => props.small ? '14px 20px' : '25px 30px'};
    outline: none;
    border: none;
    background: transparent;
    color: ${props => props.theme.textPrimary || "white"};
    ${props => props.absolute && css`
        position: absolute;
        top: 0;
        right: 0;
    `}
    cursor: pointer;
`

const Burger = props => {
    return (
        <Button {...props} onClick={() => props.menu ? props.onClick() : props.handleMenuActive(!props.menuActive)}>
            {!props.menuActive ? <Menu size={32} /> : <X size={32} />}
        </Button>
    )
}
export default Burger