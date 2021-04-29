import React from 'react'
import { connect } from 'react-redux'
import {
    loadImagesToImageCatalog,
    loadImagesForOneIterationToImageCatalog,
    changeDataIntervalInImageCatalog,
    countItemsForOneIteration,
    loaderInImageCatalog
} from '@/store/actions/imageCatalogActions'
import ImageCatalog from './ImageCatalog'

const ImageCatalogContainer = (props) => {
    return <ImageCatalog {...props} />
}

const mapStateToProps = (state) => ({
    imagesArray: state.imageCatalog.items,
    imagesArrayForOneIteration: state.imageCatalog.itemsForOneIteration,
    dataInterval: state.imageCatalog.date,
    itemsCounterForOneIteration: state.imageCatalog.itemsCounterForOneIteration,
    loader: state.imageCatalog.loader,
    todayDate: state.mainImage.todayData.date
})

const mapDispatchToProps = (dispatch) => ({
    loadImages(items) {
        dispatch(loadImagesToImageCatalog(items))
    },
    loadImagesToOneIteration(items) {
        dispatch(loadImagesForOneIterationToImageCatalog(items))
    },
    changeDataInterval(startDate, endDate) {
        dispatch(changeDataIntervalInImageCatalog(startDate, endDate))
    },
    countItemsForOneIteration(items) {
        dispatch(countItemsForOneIteration(items))
    },
    changeLoader(loaderShow) {
        dispatch(loaderInImageCatalog(loaderShow))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageCatalogContainer)
