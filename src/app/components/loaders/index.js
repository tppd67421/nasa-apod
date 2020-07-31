import React from 'react'
import './main.scss'

export const LoaderActive = () => {
    return (
        <div className='loader-active'>
            <h4>Loader...</h4>
            <div className='lds-dual-ring' />
        </div>
    )
}

export const LoaderEmpty = () => {
    return (
        <div className='loader-empty' />
    )
}
