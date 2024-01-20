import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

const Button = styled.button`
    font-family: 'Merriweather', Arial, Helvetica, sans-serif;
    border-radius: 50px;
    border: 4px solid ${props => props.theme.button || "white"};
    background: transparent;
    color: ${props => props.theme.button || "unset"};
    font-size: 2.1em;
    padding: 25px 50px;
    margin: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color .4s;
    width: 295px;
    @media screen and (min-width: 901px){
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
            transform: translateY(-17%) skewY(15deg);
        }
    }
    &:hover{
        color: rgb(120,80,0);
    }
    &:focus{
        border: 4px solid rgb(120,80,0);
        outline: none;
    }
    @media screen and (max-width: 900px){
        font-size: 1.5em;
        width: 80%;
        padding: 10px 20px;
    }
`

const StyledLink = styled(Link)`
    @media screen and (max-width: 900px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

const StyledALink = styled.a`
    @media screen and (max-width: 900px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
    text-decoration: none;
`

const StyledRouterLink = styled(RouterLink)`
    @media screen and (max-width: 900px){
        width: 100%;
        display: flex;
        justify-content: center;
        text-decoration: none;
    }
`

const CoverButton = props => {

    if (props.to && !props.router) {
        return (
            <StyledLink to={props.to} smooth>
                <Button>
                    {props.children}
                </Button>
            </StyledLink>
        )
    }
    if (props.href) {
        return (
            <StyledALink href={props.href}>
                <Button>
                    {props.children}
                </Button>
            </StyledALink>
        )
    }
    return (
        <StyledRouterLink to={props.to}>
            <Button>
                {props.children}
            </Button>
        </StyledRouterLink>
    )
}
export default CoverButton