import React from 'react'
import { Modal } from 'react-bootstrap'
import './ModalWindow.scss'

const ModalWindow = ({
    modalWindowShowed,
    setStateForModalWindow,
    modalWindowTitle,
    modalWindowMainData,
    modalWindowDate,
    modalWindowExplanation
}) => {
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
                <p>{modalWindowDate}</p>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow
