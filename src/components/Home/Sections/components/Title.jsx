import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const H2 = styled.h2`
    font-size: 5em;
    color: ${props => props.theme.textPrimary || "unset"};
    text-align: center;
    font-weight: bolder;
    margin: 30px 0px;
    @media screen and (max-width: 900px){
        font-size: 3em;
    }
`
const Title = props => {
    return (
        <H2>
            <Fade top cascade>
                {props.children}
            </Fade>
        </H2>
    )
}
export default Title