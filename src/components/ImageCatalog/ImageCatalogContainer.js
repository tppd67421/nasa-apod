import { connect } from 'react-redux'
import {
  loadImagesToImageCatalog,
  loadImagesForOneIterationToImageCatalog,
  changeDateIntervalInImageCatalog,
  countItemsForOneIteration,
  loaderInImageCatalog,
} from '@/store/slices/imageCatalogSlice'
import ImageCatalog from './ImageCatalog'

const ImageCatalogContainer = (props) => {
  return <ImageCatalog {...props} />
}

const mapStateToProps = (state) => ({
  imagesArray: state.imageCatalog.items,
  imagesArrayForOneIteration: state.imageCatalog.itemsForOneIteration,
  dateInterval: state.imageCatalog.date,
  itemsCounterForOneIteration: state.imageCatalog.itemsCounterForOneIteration,
  loader: state.imageCatalog.loader,
  todayDate: state.mainImage.todayData.date,
})

const mapDispatchToProps = (dispatch) => ({
  loadImages(items) {
    dispatch(loadImagesToImageCatalog(items))
  },
  loadImagesToOneIteration(items) {
    dispatch(loadImagesForOneIterationToImageCatalog(items))
  },
  changeDateInterval(startDateValue, endDateValue) {
    dispatch(changeDateIntervalInImageCatalog({ startDateValue, endDateValue }))
  },
  countItemsForOneIteration(items) {
    dispatch(countItemsForOneIteration(items))
  },
  changeLoader(loaderShow) {
    dispatch(loaderInImageCatalog(loaderShow))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageCatalogContainer)
