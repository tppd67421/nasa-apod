import { combineReducers } from 'redux'
import mainImage from './mainImageReducer'
import imageCatalog from './imageCatalogReducer'
import modalWindow from './modalWindowReducer'

export default combineReducers({ mainImage, imageCatalog, modalWindow })
