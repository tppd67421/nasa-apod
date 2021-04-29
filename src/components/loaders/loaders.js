import React from 'react'
import './loaders.scss'

export const LoaderActive = () => {
    return (
        <div className='loader-active'>
            <div className='loader-active__ellips' />
            <p>Loading...</p>
        </div>
    )
}

export const LoaderEmpty = () => {
    return (
        <div className='loader-empty'>
            <div className='loader-empty__ellips' />
            <p>Loading...</p>
        </div>
    )
}
