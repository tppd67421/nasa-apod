import { combineReducers } from 'redux'
import mainImage from './mainImageReducer'
import imageCatalog from './imageCatalogReducer'
import modalWindow from './modalWindowReducer'
import preloader from './preloaderReducer'

export default combineReducers({
    mainImage,
    imageCatalog,
    modalWindow,
    preloader
})
