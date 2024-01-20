import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
`

const Title = styled.h1`
    font-size: 6em;
    color: ${props => props.theme.textPrimary || "gold"};
    margin-bottom: 0px;
    @media (max-width: 768px){
        font-size: 4em;
    }
`
const Subtitle = styled.p`
    font-size: 2em;
    color: ${props => props.theme.textPrimary || "gold"};
    margin: 0;
    padding: 40px;
`

const StyledLink = styled(Link)`
    font-size: 2em;
    color: black;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

const Error404 = props => {
    return(
        <Wrapper>
            <Title>Error 404</Title>
            <Subtitle>Seite nicht gefunden</Subtitle>
            <StyledLink to="/">Home</StyledLink>
        </Wrapper>
    )
}
export default Error404