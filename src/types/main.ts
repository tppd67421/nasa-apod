export interface IMainImageItem {
    date: string
    url: string
    explanation: string
    title: string
    mediaType: string
}

export interface IImageCatalogItem extends IMainImageItem {
    copyright?: string
    hdurl: string
    service_version: string
}
