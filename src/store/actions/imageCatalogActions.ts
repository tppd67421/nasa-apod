import AC from '@/constants/actionsConstants'
import { ImageCatalogTypes } from '@/types/actions'
import { IImageCatalogItem } from '@/types/main'

export const loadImagesToImageCatalog = (items: IImageCatalogItem[]): ImageCatalogTypes => ({
    type: AC.LOAD_IMAGES_TO_IMAGE_CATALOG,
    items
})

export const loadImagesForOneIterationToImageCatalog = (items: IImageCatalogItem[]): ImageCatalogTypes => ({
    type: AC.LOAD_IMAGES_FOR_ONE_ITERATION_TO_IMAGE_CATALOG,
    items
})

export const changeDataIntervalInImageCatalog = (
    startDateValue: string | null,
    endDateValue: string | null): ImageCatalogTypes =>
({
    type: AC.CHANGE_DATA_INTERVAL_IN_IMAGE_CATALOG,
    startDateValue,
    endDateValue
})

export const countItemsForOneIteration = (counter: number): ImageCatalogTypes => ({
    type: AC.ITEMS_COUNTER_FOR_ONE_ITERATION,
    counter
})

export const loaderInImageCatalog = (loader: boolean): ImageCatalogTypes => ({
    type: AC.LOADER_IN_IMAGE_CATALOG,
    loader
})
