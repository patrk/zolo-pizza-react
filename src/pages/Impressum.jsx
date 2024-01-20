import React, { useState, useEffect } from 'react';
import Footer from '../components/Home/Footer';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    height: 100%;
    background: #EED797;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 900px;
    @media (max-width: 900px){
        width: 100%;
        padding: 0px 20px;
    }
    padding-bottom: 30px;
`

const Title = styled.h1`
    font-size: 3.5em;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.textPrimary || "black"};
    @media (max-width: 900px){
        font-size: 2.8em;
    }
`

const Subtitle = styled.h2`
    font-size: 2.4em;
    color: black;
    font-style: italic;
    text-align: center;
    margin: 10px 0px;
    @media (max-width: 900px){
        font-size: 1.8em;
    }
`

const P = styled.p`
    color: black;
    font-size: 1.2em;
    line-height: 1.8;
    @media (max-width: 900px){
        font-size: 1em;
    }
`

const Hr = styled.hr`
    border-color: ${props => props.theme.textPrimary || "black"};
    opacity: 0.8;
    border-radius: 50%;
`

const Impressum = (props) => {
    return (
        <>
            <Helmet>
                <title>Solo Pizza - Impressum</title>
            </Helmet>
            <Main>
                <Wrapper>
                    <Title>Impressum</Title>
                    <Subtitle>solopizza.berlin</Subtitle>
                    <P>
                        Wilhelmstraße 147<br/>
                        13595 Berlin-Spandau
                    </P>
                    <Hr/>
                    <P>
                        Tel: (+49) 030 - 36 43 38 88<br/>
                        E-Mail: info@solopizza.berlin<br/>
                        Internet: http://www.solopizza.berlin/
                    </P>
                    <Hr/>
                    <P>
                        Geschäftsführer: Gina Livolsi<br/>
                        Registergericht: Berlin Charlottenburg<br/>
                        Registernummer: HRB 167845 B<br/>
                        Umsatzteuer-identifikationsnummer: DE 300 754 385
                    </P>
                </Wrapper>
            </Main>
            <Footer />
        </>
    )
}

export default Impressum