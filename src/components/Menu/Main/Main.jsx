import React from 'react'
import styled from 'styled-components'
import ShowType from './ShowType'
import GridElement from './GridElement'
import { animated, useTransition } from 'react-spring'

import menu from "../menu"

const StyledMain = styled.main`
    margin-left: 300px;
    width: calc(100% - 300px);
    box-sizing: border-box;
    height: 100%;
    padding: 40px 45px;
    @media screen and (max-width: 1020px){
        margin-left: 0px;
        width: 100%;
        padding: 40px 0px;
    }
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
`

const Title = styled.h2`
    font-weight: bolder;
    font-family: 'Merriweather', Arial, Helvetica, sans-serif;
    font-size: 6em;
    color: ${props => props.theme.textPrimary || "unset"};
    margin: 8px 0px;
    text-transform: capitalize;
    @media screen and (max-width: 1020px){
        font-size: 2.5em;
        margin: 50px 25px 8px 25px;
    }
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(370px, 1fr) );
    grid-gap: 40px 10px;
    margin-top: 160px;
`

const AnimatedTitle = animated(Title)

/* TABLE */

const Overflow = styled.div`
    overflow-x: auto;
`

const Table = styled.table`/* 
    min-width: 600px; */
    width: 100%;
    border-collapse: collapse;
    margin-top: 160px;
    @media screen and (max-width: 1020px){
        margin-top: 120px;
        max-width: 100%;
    }
`

const Th = styled.th`
    width: 150px;
`



const Main = props => {
    const transition = useTransition(props.show, null, {
        from: { position: 'absolute', transform: 'translateX(40px)', opacity: 0 },
        enter: { transform: 'translateX(0px)', opacity: 1 },
        leave: { position: 'absolute', transform: 'translateX(40px)', opacity: 0 },
        onRest: () => {
            if (!props.show) {
                props.changeType()
            }
        }
    })

    const AllElements = menu.map((item, index) => {
                        
        if(props.show === "alles"){
            return(
                <GridElement key={index} item={item} {...props}>
                    {item.name}
                </GridElement>
            )   
        }else if(props.show === "pizza" && item.typeId === 1){
            return(
                <GridElement key={index} item={item} {...props}>
                    {item.name}
                </GridElement>
            )
        }else if(props.show === "pizza bianca" && item.typeId === 2){
            return(
                <GridElement key={index} item={item} {...props}>
                    {item.name}
                </GridElement>
            )
        }else if(props.show === "pizza speciale" && item.typeId === 3){
            return(
                <GridElement key={index} item={item} {...props}>
                    {item.name}
                </GridElement>
            )
        }else if(props.show === "vegetarier" && item.vegetarian){
            return(
                <GridElement key={index} item={item} {...props}>
                    {item.name}
                </GridElement>
            )
        }
    })

    return (
        <StyledMain>
            {transition.map(({ item, key, props }) => item && <AnimatedTitle style={props} key={key}>{String(item)}</AnimatedTitle>)}
            {true ?
                <Overflow>
                    <Table>
                        {props.show && 
                            <thead>
                                <tr>
                                    <th></th>
                                    <Th>Piccola (33cm)</Th>
                                    <Th>Medium (41cm)</Th>
                                    <Th>Grande (50cm)</Th>
                                </tr>
                            </thead>
                        }
                        <tbody>
                            {AllElements}
                        </tbody>
                    </Table>
                </Overflow>
                :
                <GridWrapper>
                    {AllElements}
                </GridWrapper>
            }
        </StyledMain>
    )
}
export default Main