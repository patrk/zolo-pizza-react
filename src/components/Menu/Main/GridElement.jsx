import React from 'react'
import styled from 'styled-components'
//import Ingredients from './Ingredients'
//import Prices from './Prices'
//import ElementFooter from './ElementFooter'
import { useTransition, animated } from 'react-spring'
import { Feather } from 'react-feather'
import { NumericFormat as NumberFormat } from 'react-number-format';
import getTypeFromId from './getTypeFromId'

const Wrapper = styled.div`
    width: 370px;
    height: 280px;
    position: relative;
    overflow: hidden;
    margin: auto;
    border-radius: 25px;
    &:hover>div{
        top: 0;
        background: ${props => props.theme.button || "white"};
    }
`

const Img = styled.img`
    width: 100%;
    height: 85%;
`

const WrapperTitle = styled.div`
    position: absolute;
    left: 0;
    top: 85%;
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    transition: top .4s, background .4s;
`

const Title = styled.h4`
    color: black;
    font-weight: bolder;
    font-size: ${props => props.item.longname ? "1.2em" : "1.5em"};
    margin: 0px 10px;
    position: absolute;
    top: 5px;
    text-transform: capitalize;
    text-align: center;
`
/* Tr */
const Tr = styled.tr`

`

const Td = styled.td`
    border-bottom: 1px solid ${props => props.theme.textPrimary || "black"};
    text-align: center;
    font-size: 1.3em;
    @media screen and (max-width: 1020px){
        font-size: .8em;
    }
`

const TdPrincipal = styled(Td)`
    font-size: 1.5em;
    text-transform: capitalize;
    font-weight: bolder;
    padding: 10px 0px;
    text-align: left;/* 
    min-width: 280px; */
    font-family: 'Merriweather', Arial, Helvetica, sans-serif;
    @media screen and (max-width: 1020px){
        font-size: 1.2em;
        padding-left: 8px;
    }
`
const IngredientsList = styled.div`
    font-size: 0.7em;
    font-weight: lighter;
    font-style: italic;
    opacity: 0.8;
    @media screen and (max-width: 1020px){
        font-size: 0.5em
    }
`
const StyledFeather = styled(Feather)`
    padding: 0px 10px;
    visibility: ${props => props.vegetarian ? "visible" : "hidden"};
    @media screen and (max-width: 1020px){
        padding: 0px 2px;
        width: 16px;
    }
`

const Type = styled.span`
    font-size: 0.7em;/* 
    padding: 0px 6px; */
`

const AnimatedWrapper = animated(Wrapper)
const AnimatedTr = animated(Tr)

const GridElement = props => {
    const props2 = props

    const transition = useTransition(true, null, {
        from: { transform: 'translate3d(0,40px,0)', opacity: 0 },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        leave: { transform: 'translate3d(0,40px,0)', opacity: 0 }
    })

    if(true){
        return ( 
            <AnimatedTr {...props2}>
                <TdPrincipal>
                    {props2.children}
                    {props2.item.vegetarian && <StyledFeather color="green" vegetarian={props2.item.vegetarian ? 1 : 0}/>}
                    {(props.show === "vegetarier" /* || props.show === "alles" */) && <Type>{getTypeFromId(props2.item.typeId)}</Type>}
                    <IngredientsList>
                        {
                            props2.item.ingredients.map((item, index) => {
                                if(props2.item.ingredients.length - 1 === index){
                                    return item
                                }
                                return item + ", "
                            })
                        }
                    </IngredientsList>
                </TdPrincipal>
                <Td><NumberFormat value={props2.item.prices[0]} displayType="text" suffix="€" fixedDecimalScale decimalScale={2} decimalSeparator=","/></Td>
                <Td><NumberFormat value={props2.item.prices[1]} displayType="text" suffix="€" fixedDecimalScale decimalScale={2} decimalSeparator=","/></Td>
                <Td><NumberFormat value={props2.item.prices[2]} displayType="text" suffix="€" fixedDecimalScale decimalScale={2} decimalSeparator=","/></Td>
            </AnimatedTr>
        )
    }
    /* return transition.map(({item,key,props}) =>
        <AnimatedWrapper {...props2} style={props} key={key}>
            <Img src={/* props.item.image x*//*}/>
            <WrapperTitle>
                <Title {...props2}>
                    {props2.children}
                </Title>
                <Ingredients items={props2.item.ingredients}/>
                <Prices items={props2.item.prices}/>
                <ElementFooter vegetarian={props2.item.vegetarian} typeId={props2.item.typeId}/>
            </WrapperTitle>
        </AnimatedWrapper>
    ) */
}
export default GridElement