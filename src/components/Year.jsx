import React from 'react'

const Year = props => {
    const year = new Date().getFullYear()
    return (
        <>{year}</>
    )
}
export default Year