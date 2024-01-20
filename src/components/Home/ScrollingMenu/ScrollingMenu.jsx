import React from 'react'
import styled from 'styled-components'
import ScrollingMenuItem from './ScrollingMenuItem'
import ExtraMenu from './ExtraMenu'
import Divider from './Divider'

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`


const ScrollingMenu = props => {
    return (
        <Div>
            <Divider />
            <ScrollingMenuItem name="Home" to="1" />
            <ScrollingMenuItem name="Über uns" to="2" />
            <ScrollingMenuItem name="Standort" to="3" />
            <ScrollingMenuItem name="Kontakt" to="4" />
            <ExtraMenu {...props} />
            <Divider />
        </Div>
    )
}
export default ScrollingMenu