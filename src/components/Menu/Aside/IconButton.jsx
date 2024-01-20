import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    margin: 7px;
    padding: 12px 14px;
    border-radius: 50%;
    color: ${props => props.theme.button || "unset"};
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    &:hover{
        background: #FFFFFF20;
    }
`

const IconButton = props => {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}
export default IconButton