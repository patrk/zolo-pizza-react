import React from 'react'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import styled from 'styled-components'
import BackgroundLogo from './components/BackgroundLogo'
import Fade from 'react-reveal/Fade'

const Iframe = styled.iframe`
    width: 72%;
    height: 550px;
    border-width: 5px 0px;
    border-color: rgb(200, 145, 26);
    border-style: solid;
    @media screen and (max-width: 900px){
        width: 100%;
        height: 350px;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 72%;
    @media screen and (max-width: 900px){
        width: 80%;
        flex-direction: column;
    }
`

const H3 = styled.h3`
    font-size: 2.5em;
    color: ${props => props.theme.textPrimary || "unset"};
    text-transform: uppercase;
    @media screen and (max-width: 900px){
        font-size: 1.8em;
    }
`

const P = styled.p`
    font-size: 1.25em;
    color: rgb(120,80,0);
    @media screen and (max-width: 900px){
        font-size: 1em;
    }
`

const Location = props => {
    return (
        <Wrapper color="rgba(222, 175, 40, 0.35)">
            <BackgroundLogo bottom left />
            <Title>Standort</Title>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.850247479387!2d13.1930857481879!3d52.52436117979585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8564ab0bdd04f%3A0xc603c66f8c46ed19!2sSolo%20Pizza!5e0!3m2!1ses-419!2ses!4v1593301957285!5m2!1ses-419!2ses" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="Map"></Iframe>
            <Div>
                <div>
                    <H3>
                        <Fade top cascade>
                            ÖFFNUNGSZEITEN
                        </Fade>
                    </H3>
                    <Fade left>
                        {/* <P>Unsere geänderten Öffnungszeiten in der Coronazeit:</P> */}
                        <P>Montag und Dienstag: Ruhetag</P>
                        <P>Mittwoch und Donnerstag: 16:00 Uhr - 22:00 Uhr</P>
                        <P>Freitag und Samstag: 16:00 Uhr - 23:00 Uhr</P>
                        <P>Sonntag: 13:00 Uhr - 21:00 Uhr</P>
                    </Fade>
                </div>
                <div>
                    <H3>
                        <Fade top cascade>
                            adresse
                        </Fade>
                    </H3>
                    <Fade right>
                        <P>Wilhelmstraße 147</P>
                        <P>13595 Berlin-Spandau</P>
                    </Fade>
                </div>
            </Div>
        </Wrapper>
    )
}
export default Location