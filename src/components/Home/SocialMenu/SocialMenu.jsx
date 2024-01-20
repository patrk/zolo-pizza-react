import React from 'react'
import styled from 'styled-components'
import SocialMenuItem from './SocialMenuItem'
import Divider from './Divider'
import { Facebook, Instagram, Mail } from 'react-feather'

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    
`


const SocialMenu = props => {
    return (
        <Div>
            <Divider />
            <SocialMenuItem href="https://instagram.com/solopizzaspandau">
                <Instagram size={36}/>
            </SocialMenuItem>
            <SocialMenuItem href="https://facebook.com/solopizzaspandau">
                <Facebook size={36} />
            </SocialMenuItem>
            <SocialMenuItem href="mailto:info@solopizza.berlin">
                <Mail size={36} />
            </SocialMenuItem>
            <Divider />
        </Div>
    )
}
export default SocialMenu