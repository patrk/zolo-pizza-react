import React from 'react'
import styled from 'styled-components'
import { Feather } from 'react-feather'
import getTypeFromId from './getTypeFromId'


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding-bottom: 10px;
`

const Text = styled.p`
    padding: 0px 15px;
    font-style: italic;
`

const StyledFeather = styled(Feather)`
    padding: 0px 15px;
    visibility: ${props => props.vegetarian ? "visible" : "hidden"};
`

const ElementFooter = props => {
    return(
        <Wrapper>
            <Text>{getTypeFromId(props.typeId)}</Text>
            <StyledFeather color="green" vegetarian={props.vegetarian ? 1 : 0}/>
        </Wrapper>
    )
}

export default ElementFooter