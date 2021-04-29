import React from "react"
import { IImageCatalogItem, IMainImageItem } from "./main";


export interface IAppState {
    mainImage: IMainImage
    imageCatalog: IImageCatalog
    modalWindow: IModalWindow
    preloader: IPreloader
}

export interface IMainImage {
    imageData: IMainImageItem
    todayData: IMainImageItem
}

export interface IImageCatalog {
    items: IImageCatalogItem[]
    itemsForOneIteration: IImageCatalogItem[]
    date: {
        startDateValue: string | null
        endDateValue: string | null
    }
    itemsCounterForOneIteration: number
    loader: boolean
}

export interface IModalWindow {
    modalWindowState: boolean
    modalWindowTitle: string | null
    modalWindowMainData: React.ReactNode
    modalWindowDate: string | null
    modalWindowExplanation: string | null
}

export interface IPreloader {
    itemsCounterForPreloader: number
}
