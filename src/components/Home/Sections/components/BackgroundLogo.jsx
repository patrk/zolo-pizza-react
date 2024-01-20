import React from 'react'
import styled, { css } from 'styled-components'
import minilogo from '../../../../images/minilogo.png'

const Div = styled.div`
    position: absolute;
    opacity: 0.12;
    z-index: -1;
    ${props => props.top && css`
        top: -50px;
    `}
    ${props => props.left && css`
        left: -50px;
    `}
    ${props => props.right && css`
        right: -50px;
    `}
    ${props => props.bottom && css`
        bottom: -50px;
    `}
`

const Img = styled.img`
    width: ${props => props.width || "100px"};
    @media screen and (max-width: 900px){
        width: 300px;
    }
`

const BackgroundLogo = props => {
    return (
        <Div {...props}>
            <Img width="400px" src={minilogo} alt="logo" />
        </Div>
    )
}
export default BackgroundLogo