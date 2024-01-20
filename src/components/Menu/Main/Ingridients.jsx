import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding-top: 50px;
    font-style: italic;
    font-size: 1.2em;
    text-align: center;
    text-transform: capitalize;
    margin: 0px 10px;
`

const Ingredients = props => {

    return(
        <Wrapper>
        {
            props.items.map((item, index) => {
                if(props.items.length - 1 === index){
                    return item
                }
                return item + ", "
            })
        }
        </Wrapper>
    )
}

export default Ingredients