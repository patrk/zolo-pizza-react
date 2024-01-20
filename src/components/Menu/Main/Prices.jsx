import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 15px 0px;
`

const Divider = styled.div`
    width: 0px;
    border: 1px solid #00000080;
    height: 100%;
    border-radius: 50%;
`

const Type = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>*{
        margin: 0;
    }
`

const H5 = styled.h5`
    padding: 7px;
`

const Prices = props => {
    return(
        <Wrapper>
            <Type>
                <H5>Piccola (33cm)</H5>
                <p><NumberFormat value={props.items[0]} displayType="text" suffix="€" fixedDecimalScale decimalScale={2} decimalSeparator=","/></p>
            </Type>
            <Divider/>
            <Type>
                <H5>Medium (41cm)</H5>
                <p><NumberFormat value={props.items[1]} displayType="text" suffix="€" fixedDecimalScale decimalScale={2} decimalSeparator=","/></p>
            </Type>
            <Divider/>
            <Type>
                <H5>Grande (50cm)</H5>
                <p><NumberFormat value={props.items[2]} displayType="text" suffix="€" fixedDecimalScale decimalScale={2} decimalSeparator=","/></p>
            </Type>
        </Wrapper>
    )
}
export default Prices