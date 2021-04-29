import React from 'react'
import './ApplicationError.scss'

const ApplicationError = () => {
    document.body.style.overflow = 'hidden'

    return (
        <section className='application-error'>
            <div className='application-error__items-wrap'>
                <h2 className='application-error__header'>Some troubles</h2>
                <h2 className='application-error__header'>Please, try again later</h2>
                <button
                    className='application-error__reload-button'
                    onClick={() => window.location.reload()}
                >
                    Reload page
                </button>
            </div>
        </section>
    )
}

export default ApplicationError
