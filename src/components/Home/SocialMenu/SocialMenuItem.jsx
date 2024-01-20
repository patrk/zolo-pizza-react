import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    display: inline-block;
    transform-origin: center left;
    color: rgb(200, 145, 26);
    transform: ${props => props.active ? "scale(1.4)" : "scale(1)"};
    transition: transform .4s, font-weight .4s, color .2s;
    font-weight: ${props => props.active ? "bolder" : "unset"};
    margin: 4px ${props => props.horizontal ? "4px" : "0px"};
    cursor: pointer;
    &:hover{
        color: rgb(160,130,0);
    }
`

const SocialMenuItem = props => {


    return (
        <Link {...props} href={props.href} target="_blank">{props.children}</Link>
    )
}
export default SocialMenuItem