import { configureStore } from '@reduxjs/toolkit'
import imageCatalogReducer from './slices/imageCatalogSlice'
import mainImageSlice from './slices/mainImageSlice'
import modalWindowReducer from './slices/modalWindowSlice'
import preloaderReducer from './slices/preloaderSlice'

const store = configureStore({
  reducer: {
    mainImage: mainImageSlice,
    imageCatalog: imageCatalogReducer,
    modalWindow: modalWindowReducer,
    preloader: preloaderReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
