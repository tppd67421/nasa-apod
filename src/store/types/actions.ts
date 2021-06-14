import C from '@/constants/appConstants'
import { IImageCatalogItem, IMainImageItem } from './imageItems'

// Main Image
export interface ISetTodayData {
  payload: IMainImageItem
}

export interface ISetMainImage {
  payload: IMainImageItem
}

// Image Catalog
export interface ILoadImagesToImageCatalog {
  payload: IImageCatalogItem[]
}

export interface ILoadImagesForOneIterationToImageCatalog {
  payload: IImageCatalogItem[]
}

export interface IChangeDataIntervalInImageCatalog {
  payload: {
    startDateValue: string | null
    endDateValue: string | null
  }
}

export interface ICountItemsForOneIteration {
  payload: number
}

export interface ILoaderInImageCatalog {
  payload: boolean
}

// Modal Window
export interface ISetStateForModalWindow {
  payload: boolean
}

export interface ISetTitleForModalWindow {
  payload: string | null
}

export interface ISetMainDataForModalWindow {
  payload: string
}

export interface ISetDateForModalWindow {
  payload: string | null
}

export interface ISetExplanationForModalWindow {
  payload: string | null
}

export interface ISetTypeModalWindow {
  payload: typeof C.MODAL_WINDOW_IMAGE | typeof C.MODAL_WINDOW_VIDEO | null
}

// Preloader
export interface IUpdateItemsCounterForPreloader {
  payload: number
}
