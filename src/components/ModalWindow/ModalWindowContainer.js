import React from 'react'
import { connect } from 'react-redux'
import { setStateForModalWindow } from '@/store/actions/modalWindowActions'
import ModalWindow from './ModalWindow'

const ModalWindowContainer = (props) => {
    return <ModalWindow {...props} />
}

const mapStateToProps = (state) => ({
    modalWindowShowed: state.modalWindow.modalWindowState,
    modalWindowTitle: state.modalWindow.modalWindowTitle,
    modalWindowMainData: state.modalWindow.modalWindowMainData,
    modalWindowDate: state.modalWindow.modalWindowDate,
    modalWindowExplanation: state.modalWindow.modalWindowExplanation
})

const mapDispatchToProps = (dispatch) => ({
    setStateForModalWindow(state) {
        dispatch(setStateForModalWindow(state))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalWindowContainer)
