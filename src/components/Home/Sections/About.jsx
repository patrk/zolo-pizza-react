import React from 'react'
import Title from './components/Title'
import styled from 'styled-components'
import BackgroundLogo from './components/BackgroundLogo'
import mainLokal from '../../../images/mein_lokal.png'
import folio from '../../../images/folio.jpeg'
import Wrapper from './components/Wrapper'
import Fade from 'react-reveal/Fade'

/* const Wrapper = styled.div`
    width: 100vw;
    padding-bottom: 50px;
` */

const Div = styled.div`
    width: 100%;
    background: ${props => props.color || "transparent"};
`

const Award = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1300px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Img = styled.img`
    width: 350px;
    height: 350px;
    @media (max-width: 520px){
        width: 260px;
        height: 260px;
    }
`

const ImgDos = styled.img`
    width: 350px;
    height: 550px;
    @media (max-width: 520px){
        width: 260px;
        height: 260px;
    }
`

const TextDiv = styled.div`
    width: 650px;
    height: 100%;
    padding: 40px;
    @media (max-width: 1300px){
        width: 500px;
    }
    @media (max-width: 660px){
        width: 350px;
    }
    @media (max-width: 420px){
        width: 100%;
    }
    &>h2{
        /* font-size: 2.3em; */
        font-size: 3em;
        padding-top: 25px;
        color: ${props => props.theme.textPrimary || "black"};
        @media (max-width: 660px){
            font-size: 1.6em;
            padding: 0px 30px;
        }
    }
    &>p{
        font-size: 1.5em;
        color: rgb(120,80,0);
        @media (max-width: 660px){
            font-size: 1.1em;
            padding: 0px 30px;
        }
    }
    & a{
        display: block;
        font-size: 2em;
        text-decoration: none;
        color: ${props => props.theme.textPrimary || "black"};
        padding: 10px 20px;
        border: 2px solid ${props => props.theme.textPrimary || "black"};
        margin-top: 40px;
        border-radius: 50px;
        transition: background .4s, color .4s;
        width: 200px;
        text-align: center;
        &:hover{
            background: ${props => props.theme.textPrimary || "black"};
            color: white;
        }
        @media (max-width: 660px){
            font-size: 1.5em;
            margin-left: 30px;
        }
    }
`

const About = props => {
    return (
        <Wrapper>
            <Title>Über uns</Title>
            <Award>
                {/* <TextDiv>
                    <Fade left>
                        <h2>Solo Pizza gewinnt Kabel1 Mein Lokal Dein Lokal</h2>
                        {<p>Wir freuen uns sehr, dass wir das Finale um die beste Pizza Berlins bei der Kabel1 Sendung Mein Lokal Dein Lokal gewonnen haben.</p>}
                    </Fade>{
                    <Fade left>
                        <a href="https://www.kabeleins.de/tv/mein-lokal-dein-lokal/videos/201719-der-pizzagigant-1-meter-durchmesser-und-vierfacher-belag-ganze-folge" target="_blank">Schau Video</a>
                    </Fade>}
                </TextDiv> */}
                <Fade right>
                    <Img src={mainLokal}/>
                    <ImgDos src={folio}/>
                </Fade>
            </Award>
            <BackgroundLogo bottom right />
        </Wrapper>
    )
}
export default About