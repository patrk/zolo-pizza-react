import React from 'react'
import styled from 'styled-components'
import { ChevronUp } from 'react-feather'
import { Link } from 'react-scroll'

const Wrapper = styled.button`
    position: fixed;
    bottom: 15px;
    right: 15px;
    transform: ${props => props.scrolled ? "translateX(0)" : "translateX(150%)"};
    padding: 12px 14px;
    border: 4px solid ${props => props.theme.textPrimary};
    border-radius: 50%;
    transition: transform .5s, color .5s;
    background: transparent;
    color: ${props => props.theme.textPrimary};
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
    @media screen and (min-width: 901px){
        &::before{
            content: " ";
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(-150%) skewY(15deg);
            transition: transform .4s;
            background-color: ${props => props.theme.button || "unset"};
            width: 100%;
            height: 150%;
            z-index: -1;
        }
        &:hover::before{
            transform: translateY(-17%) skewY(15deg);
        }
    }/* 
    &:hover{
        color: rgb(120,80,0);
    } */
    &:focus{/* 
        border: 4px solid rgb(120,80,0); */
        outline: none;
    }
`

const GoUpButton = props => {
    return (
        <Link to="1" smooth>
            <Wrapper {...props}>
                <ChevronUp />
            </Wrapper>
        </Link>
    )
}

export default GoUpButton