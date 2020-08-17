import React from 'react'
import { Modal } from 'react-bootstrap'
import convertStringDateToObject from '@/app/helpers/convertStringDateToObject'
import './ModalWindow.scss'

const ModalWindow = ({
    modalWindowShowed,
    setStateForModalWindow,
    modalWindowTitle,
    modalWindowMainData,
    modalWindowDate,
    modalWindowExplanation
}) => {
    let dateObject = { day: '', month: '', year: '' }

    if (modalWindowDate) {
        dateObject = convertStringDateToObject(modalWindowDate)
    }
    
    return (
        <Modal dialogClassName='modal-window' show={modalWindowShowed} onHide={() => setStateForModalWindow(false)} animation={false}>
            <Modal.Header className='modal-window__header' closeButton>
                <Modal.Title>
                    <h2 className='modal-window__title'>{modalWindowTitle}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-window__body'>
                <img src={modalWindowMainData} />
                <p>{modalWindowExplanation}</p>
            </Modal.Body>
            <Modal.Footer>
                <p>{`${dateObject.day}.${dateObject.month}.${dateObject.year}`}</p>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow
