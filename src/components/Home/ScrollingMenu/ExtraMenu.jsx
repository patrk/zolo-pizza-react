import React from 'react'
import MiniLogo from '../../MiniLogo'
import Divider from './Divider'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = styled.div`
    overflow: hidden;
    height: ${props => props.scrolled ? "90px" : "0"};
    transition: height .5s;
    display: flex;
    align-items: flex-start;
    flex-direction: column;/* 
    justify-content:center; */
`

const Button = styled.button`
    padding: 8px 8px;
    border-radius: 50px;
    border: 2px solid ${props => props.theme.button || "white"};
    color: ${props => props.theme.button || "unset"};
    background: transparent;
    font-size: 1.3em;
    margin: 7px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color .4s;
    font-family: 'Merriweather', Arial, Helvetica, sans-serif;
    &::before{
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-200%) skewY(15deg);
        transition: transform .4s;
        background-color: ${props => props.theme.button || "unset"};
        width: 100%;
        height: 200%;
        z-index: -1;
    }
    &:hover::before{
        transform: translateY(-22%) skewY(15deg);
    }
    &:hover{
        color: rgb(120,80,0);
    }
    &:focus{
        border: 2px solid rgb(120,80,0);
        outline: none;
    }
`

const ExtraMenu = props => {

    return (
        <Div scrolled={props.scrolled}>{/* 
            <MiniLogo width="80px" />
            <Divider height="22px" /> */}
            <Divider height="22px" />
            <Link to="/speisekarte"><Button>Speisekarte</Button></Link>{/* 
            <Divider height="22px" /> */}
        </Div>
    )
}

export default ExtraMenu