import React, { useState, useEffect } from 'react'
import Aside from '../components/Menu/Aside/Aside'
import { Helmet } from 'react-helmet'
import Main from '../components/Menu/Main/Main'
import Header from '../components/Menu/Header/Header'
import { useMediaQuery } from 'react-responsive'

const Menu = props => {

    /* ASIDE MOBILE */
    const [asideActive, setAsideActive] = useState(false)
    const handleAsideActive = () => {
        setAsideActive(!asideActive)
    }

    const max1020 = useMediaQuery({ query: "(max-width: 1020px)" })

    const [show, setShow] = useState("alles")
    const [tempType, setTempType] = useState("alles")
    const changeTempType = (temp) => {
        if (temp !== show) {
            setAsideActive(false)
            setTempType(temp)
            setShow(false)
        }
    }
    const changeType = () => {
        setShow(tempType)
    }

    return (
        <>
            <Helmet>
                <title>Speisekarte - Solo Pizza</title>
            </Helmet>
            {max1020 && <Header onClick={handleAsideActive}/>}
            <Main show={show} handleType={changeTempType} changeType={changeType} />
            <Aside active={asideActive} onClose={() => setAsideActive(false)} show={show} handleType={changeTempType} changeType={changeType} />
        </>
    )
}
export default Menu