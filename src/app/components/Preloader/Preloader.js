import React from 'react'
import './Preloader.scss'

const Preloader = ({ className }) => {
    return (
        <div className={`preloader ${className}`}>
            <div className='preloader__content'>
                <div className='loader-circle'></div>
                <div className='loader-line-mask'>
                    <div className='loader-line'></div>
                </div>
                <p className='preloader__text'>NASA</p>
            </div>
        </div>
    )
}

export default Preloader
