import React from 'react'
import { connect } from 'react-redux'
import {
    setStateForModalWindow,
    setTitleForModalWindow,
    setMainDataForModalWindow,
    setDateForModalWindow,
    setExplanationForModalWindow
} from '@/app/store/actions/modalWindowActions'
import VideoBlock from './VideoBlock'

const VideoBlockContainer = (props) => {
    return <VideoBlock {...props} />
}

const mapStateToProps = (state) => ({
    modalWindowShowed: state.modalWindow.modalWindowState,
    mainImage: state.mainImage.imageData,
    todayImage: state.mainImage.todayData,
    itemsFromImageCatalog: state.imageCatalog.items,
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
)(VideoBlockContainer)
