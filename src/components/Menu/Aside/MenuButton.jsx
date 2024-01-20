import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 90%;
    padding: 8px;
    border-radius: 8px;
    background: ${props => props.show === props.type ? props.theme.button || "transparent" : "transparent"};
    transition: background .2s, color .2s;
    color: ${props => props.show === props.type ? "white" : props.theme.button || "white"};
    &:hover{
        background: ${props => props.theme.textPrimary || "transparent"};
        color: white;
    }
    outline: none;
    border: none;
    font-size: 1.5em;
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Merriweather', Arial, Helvetica, sans-serif;
`

const MenuButton = props => {
    return (
        <Button {...props} onClick={() => props.handleType(props.type)}>
            {props.children}
        </Button>
    )
}
export default MenuButton