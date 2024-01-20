import React, { useState } from 'react'
import * as Scroll from 'react-scroll'
import styled from 'styled-components'

const Span = styled.span`
    display: inline-block;
    transform-origin: center left;
    color: ${props => props.theme.textPrimary || "unset"};
    transform: ${props => props.active ? "scale(1.4)" : "scale(1)"};
    transition: transform .4s, font-weight .4s, color .2s;
    font-size: 1.5em;
    font-weight: ${props => props.active ? "bolder" : "unset"};
    margin: 5px 0px;
    cursor: pointer;
    &:hover{
        color: rgb(160,130,0);
    }
`

const ScrollingMenuItem = props => {
    const [active, setActive] = useState(false)

    const handleSetActive = () => {
        setActive(true)
    }

    const handleSetInactive = () => {
        setActive(false)
    }


    return (
        <Scroll.Link to={props.to} spy smooth onSetActive={handleSetActive} onSetInactive={handleSetInactive}>
            <Span active={active}>· {props.name}</Span>
        </Scroll.Link>
    )
}
export default ScrollingMenuItem