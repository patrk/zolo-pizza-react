import React from 'react'
import minilogo from '../images/minilogo.png'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Img = styled.img`
    width: ${props => props.width || "64px"};
    cursor: pointer;
    padding: ${props => props.padding || "0px"};
`

const MiniLogo = props => {
    return (
        <Link to="1" smooth>
            <Img src={minilogo} alt="SoloPizza Logo" {...props}/>
        </Link>
    )
}
export default MiniLogo