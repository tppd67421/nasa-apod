import React from "react"
import { IImageCatalogItem, IMainImageItem } from "./imageItems";


export interface IAppState {
    mainImage: IMainImageState
    imageCatalog: IImageCatalogState
    modalWindow: IModalWindowState
    preloader: IPreloaderState
}

export interface IMainImageState {
    imageData: IMainImageItem
    todayData: IMainImageItem
}

export interface IImageCatalogState {
    items: IImageCatalogItem[]
    itemsForOneIteration: IImageCatalogItem[]
    date: {
        startDateValue: string | null
        endDateValue: string | null
    }
    itemsCounterForOneIteration: number
    loader: boolean
}

export interface IModalWindowState {
    modalWindowState: boolean
    modalWindowTitle: string | null
    modalWindowMainData: React.ReactNode
    modalWindowDate: string | null
    modalWindowExplanation: string | null
}

export interface IPreloaderState {
    itemsCounterForPreloader: number
}
