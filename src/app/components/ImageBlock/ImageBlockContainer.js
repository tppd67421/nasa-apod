import React from 'react'
import { connect } from 'react-redux'
import {
    setStateForModalWindow,
    setTitleForModalWindow,
    setMainDataForModalWindow,
    setDateForModalWindow,
    setExplanationForModalWindow
} from '@/app/store/actions'
import ImageBlock from './ImageBlock'

const ImageBlockContainer = (props) => {
    return <ImageBlock {...props} />
}

const mapStateToProps = (state) => ({
    modalWindowShowed: state.modalWindow.modalWindowState,
    mainImage: state.mainImage.imageData,
    itemsFromImageCatalog: state.imageCatalog.items
})

const mapDispatchToProps = (dispatch) => ({
    setStateForModalWindow(state) {
        dispatch(setStateForModalWindow(state))
    },

    setTitleForModalWindow(title) {
        dispatch(setTitleForModalWindow(title))
    },

    setMainDataForModalWindow(mainData) {
        dispatch(setMainDataForModalWindow(mainData))
    },

    setDateForModalWindow(date) {
        dispatch(setDateForModalWindow(date))
    },

    setExplanationForModalWindow(explanation) {
        dispatch(setExplanationForModalWindow(explanation))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageBlockContainer)
