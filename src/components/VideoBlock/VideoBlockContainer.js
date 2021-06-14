import { connect } from 'react-redux'
import {
  setStateForModalWindow,
  setTitleForModalWindow,
  setMainDataForModalWindow,
  setDateForModalWindow,
  setExplanationForModalWindow,
  setTypeForModalWindow,
} from '@/store/slices/modalWindowSlice'
import { updateItemsCounterForPreloader } from '@/store/slices/preloaderSlice'
import VideoBlock from './VideoBlock'

const VideoBlockContainer = (props) => {
  return <VideoBlock {...props} />
}

const mapStateToProps = (state) => ({
  modalWindowShowed: state.modalWindow.modalWindowState,
  mainImage: state.mainImage.imageData,
  todayImage: state.mainImage.todayData,
  itemsFromImageCatalog: state.imageCatalog.items,
  itemsCounterForPreloader: state.preloader.itemsCounterForPreloader,
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
  },
  setTypeForModalWindow(type) {
    dispatch(setTypeForModalWindow(type))
  },
  updateItemsCounterForPreloader(data) {
    dispatch(updateItemsCounterForPreloader(data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoBlockContainer)
