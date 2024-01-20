import React from 'react'
import styled from 'styled-components'
import { Grid, List } from 'react-feather'

const ButtonGroup = styled.div`
    border-radius: 8px;
    border: 2px solid ${props => props.theme.textPrimary || "unset"};
    display: inline-flex;
    width: 300px;
    overflow: hidden;
`
const Button = styled.button`
    cursor: pointer;
    width: 50%;
    height: 100%;
    padding: 8px;
    outline: none;
    border: none;
    background-color: ${props => props.active ? props.theme.textPrimary : "transparent"};
    color: ${props => props.active ? "white" : props.theme.textPrimary};
    transition: background-color .2s, color .2s;
    font-size: 1.1em;
    &:hover{
        background-color: ${props => props.theme.button || "white"};
        color: white;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px;
`

const Icon = styled.div`
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const P = styled.p`
    margin: 2px 0px;
`

const ShowType = props => {
    return (
        <ButtonGroup>
            <Button active>
                <Icon>
                    <Grid />
                </Icon>
                <P>Gitter</P>
            </Button>
            <Button>
                <Icon>
                    <List />
                </Icon>
                <P>Aufführen</P>
            </Button>
        </ButtonGroup>
    )
}
export default ShowType