import { createSlice } from '@reduxjs/toolkit'
import { IImageCatalogState } from '@/store/types/state'
import {
  IChangeDataIntervalInImageCatalog,
  ICountItemsForOneIteration,
  ILoaderInImageCatalog,
  ILoadImagesForOneIterationToImageCatalog,
  ILoadImagesToImageCatalog,
} from '@/store/types/actions'

const initialState: IImageCatalogState = {
  items: [],
  itemsForOneIteration: [],
  date: {
    startDateValue: null,
    endDateValue: null,
  },
  itemsCounterForOneIteration: 0,
  loader: true,
}

const imageCatalogSlice = createSlice({
  name: 'imageCatalog',
  initialState,
  reducers: {
    loadImagesToImageCatalog(state: IImageCatalogState, action: ILoadImagesToImageCatalog) {
      state.items = action.payload
    },
    loadImagesForOneIterationToImageCatalog(
      state: IImageCatalogState,
      action: ILoadImagesForOneIterationToImageCatalog
    ) {
      state.itemsForOneIteration = action.payload
    },
    changeDateIntervalInImageCatalog(
      state: IImageCatalogState,
      action: IChangeDataIntervalInImageCatalog
    ) {
      state.date.startDateValue = action.payload.startDateValue
      state.date.endDateValue = action.payload.endDateValue
    },
    countItemsForOneIteration(state: IImageCatalogState, action: ICountItemsForOneIteration) {
      state.itemsCounterForOneIteration = action.payload
    },
    loaderInImageCatalog(state: IImageCatalogState, action: ILoaderInImageCatalog) {
      state.loader = action.payload
    },
  },
})

export const {
  loadImagesToImageCatalog,
  loadImagesForOneIterationToImageCatalog,
  changeDateIntervalInImageCatalog,
  countItemsForOneIteration,
  loaderInImageCatalog,
} = imageCatalogSlice.actions

export default imageCatalogSlice.reducer
