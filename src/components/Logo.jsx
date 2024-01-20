import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components'

const Img = styled.img`
    width: ${props => props.width ? props.width : "100%"};
    opacity: ${props => props.show ? "1" : "0"};
    transition: opacity .5s;/* 
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
    /* filter: drop-shadow(0px 0px 1px #222); */
    filter: ${props => props.shadow ? "drop-shadow(5px 5px 5px #111)" : "unset"};
    @media screen and (max-width: 700px){
        width: 100%;
    }
    @media screen and (max-width: 850px) and (orientation: landscape){
        display: none;
    }
    /* @media screen and (max-width: 700px) and (orientation: landscape){
            width: 200px;
        } */
    /* @media (orientation: landscape){
        width: 200px;
    } */
`

const Logo = props => {
    return (
        <Img src={logo} show={props.show} width={props.width} shadow={props.shadow} />
    )
}
export default Logo