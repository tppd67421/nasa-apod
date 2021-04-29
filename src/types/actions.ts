import AC from '@/constants/actionsConstants'
import React from 'react';
import { IImageCatalogItem, IMainImageItem } from './main';


// Main Image
export interface ISetTodayData extends IMainImageItem {
    type: typeof AC.SET_TODAY_DATA
}

export interface ISetMainImage extends IMainImageItem {
    type: typeof AC.CHANGE_MAIN_IMAGE
}

// Image Catalog
export interface ILoadImagesToImageCatalog {
    type: typeof AC.LOAD_IMAGES_TO_IMAGE_CATALOG
    items: IImageCatalogItem[]
}

export interface ILoadImagesForOneIterationToImageCatalog {
    type: typeof AC.LOAD_IMAGES_FOR_ONE_ITERATION_TO_IMAGE_CATALOG
    items: IImageCatalogItem[]
}

export interface IChangeDataIntervalInImageCatalog {
    type: typeof AC.CHANGE_DATA_INTERVAL_IN_IMAGE_CATALOG
    startDateValue: string | null
    endDateValue: string | null
}

export interface ICountItemsForOneIteration {
    type: typeof AC.ITEMS_COUNTER_FOR_ONE_ITERATION
    counter: number
}

export interface ILoaderInImageCatalog {
    type: typeof AC.LOADER_IN_IMAGE_CATALOG
    loader: boolean
}


// Modal Window
export interface ISetStateForModalWindow {
    type: typeof AC.SET_STATE_FOR_MODAL_WINDOW
    state: boolean
}

export interface ISetTitleForModalWindow {
    type: typeof AC.SET_TITLE_FOR_MODAL_WINDOW
    title: string | null
}

export interface ISetMainDataForModalWindow {
    type: typeof AC.SET_MAIN_DATA_FOR_MODAL_WINDOW
    mainData: React.ReactNode
}

export interface ISetDateForModalWindow {
    type: typeof AC.SET_DATE_FOR_MODAL_WINDOW
    date: string | null
}

export interface ISetExplanationForModalWindow {
    type: typeof AC.SET_EXPLANATION_FOR_MODAL_WINDOW
    explanation: string | null
}


// Preloader
export interface IUpdateItemsCounterForPreloader {
    type: typeof AC.UPDATE_ITEM_COUNTER_FOR_PRELOADER,
    counter: number
}


export type MainImageTypes = ISetTodayData | ISetMainImage

export type ImageCatalogTypes = ILoadImagesToImageCatalog
    | ILoadImagesForOneIterationToImageCatalog
    | IChangeDataIntervalInImageCatalog
    | ICountItemsForOneIteration
    | ILoaderInImageCatalog

export type ModalWindowTypes = ISetStateForModalWindow | ISetTitleForModalWindow
    | ISetMainDataForModalWindow
    | ISetDateForModalWindow
    | ISetExplanationForModalWindow

export type PreloaderTypes = IUpdateItemsCounterForPreloader
