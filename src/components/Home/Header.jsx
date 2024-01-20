import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ScrollingMenu from './ScrollingMenu/ScrollingMenu'
import SocialMenu from './SocialMenu/SocialMenu'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import MobileMenu from './MobileMenu/MobileMenu'
import GoUpButton from './GoUpButton'

const FixedLeft = styled.header`
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 0px 0px 15px;
    z-index: 1;
`

const FixedRight = styled.section`
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 15px 0px 0px;
    z-index: 1;
`

const Header = props => {

    const [scrolled, setScrolled] = useState(false)

    const onScroll = () => {
        if (document.documentElement.scrollTop >= 300) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])


    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })

    return (
        <>
            {!isMobile ?
                <>
                    <FixedLeft>
                        <ScrollingMenu scrolled={scrolled} />
                    </FixedLeft>
                    <FixedRight>
                        <SocialMenu />
                    </FixedRight>
                </>
                :
                <MobileMenu scrolled={scrolled} {...props} />
            }
            <GoUpButton scrolled={scrolled} />
        </>
    )
}
export default Header