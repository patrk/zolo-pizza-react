import React, { useState, useEffect } from 'react';
import Header from '../components/Home/Header';
import * as Scroll from 'react-scroll';
import Cover from '../components/Home/Cover';
import About from '../components/Home/Sections/About';
import Location from '../components/Home/Sections/Location';
import Contact from '../components/Home/Sections/Contact';
import Footer from '../components/Home/Footer';
import { Helmet } from 'react-helmet';


const Home = (props) => {
    const [menuActive, setMenuActive] = useState(false)
    const handleMenuActive = (bool) => {
        setMenuActive(bool)
    }
    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [menuActive])
    return (
        <>
            <Helmet>
                <title>Solo Pizza</title>
            </Helmet>
            <Header handleMenuActive={handleMenuActive} menuActive={menuActive} />
            <main>
                <Scroll.Element name="1">
                    <Cover handleMenuActive={handleMenuActive} menuActive={menuActive} />
                </Scroll.Element>
                <Scroll.Element name="2">
                    <About />
                </Scroll.Element>
                <Scroll.Element name="3">
                    <Location />
                </Scroll.Element>
                <Scroll.Element name="4">
                    <Contact />
                </Scroll.Element>
            </main>
            <Footer />
        </>
    )
}

export default Home