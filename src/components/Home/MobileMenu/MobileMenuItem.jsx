import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledLink = styled(Link)`
    color: ${props => props.theme.textPrimary};
    font-size: 2.3em;
    width: 100%;
    padding: 15px 5px;
    text-align: center;
`
const MobileMenuItem = props => {
    return (
        <StyledLink to={props.to} smooth onClick={() => props.handleMenuActive(false)}>
            {props.children}
        </StyledLink>
    )
}
export default MobileMenuItem