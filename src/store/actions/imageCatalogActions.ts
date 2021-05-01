import { createAction } from 'redux-act'
import AC from '@/constants/actionsConstants'
import {
    ILoadImagesToImageCatalog,
    ILoadImagesForOneIterationToImageCatalog,
    IChangeDataIntervalInImageCatalog,
    ICountItemsForOneIteration,
    ILoaderInImageCatalog,
} from '@/types/actions'
import { IImageCatalogItem } from '@/types/imageItems'


export const loadImagesToImageCatalog = createAction<ILoadImagesToImageCatalog>(
    AC.LOAD_IMAGES_TO_IMAGE_CATALOG,
    (items: IImageCatalogItem[]) => ({
        items
    })
)

export const loadImagesForOneIterationToImageCatalog = createAction<ILoadImagesForOneIterationToImageCatalog>(
    AC.LOAD_IMAGES_FOR_ONE_ITERATION_TO_IMAGE_CATALOG,
    (items: IImageCatalogItem[]) => ({
        items
    })
)

export const changeDataIntervalInImageCatalog = createAction<IChangeDataIntervalInImageCatalog>(
    AC.CHANGE_DATA_INTERVAL_IN_IMAGE_CATALOG,
    (startDateValue: string | null, endDateValue: string | null) => ({
        startDateValue,
        endDateValue
    })
)

export const countItemsForOneIteration = createAction<ICountItemsForOneIteration>(
    AC.ITEMS_COUNTER_FOR_ONE_ITERATION,
    (counter: number) => ({
        counter
    })
)

export const loaderInImageCatalog = createAction<ILoaderInImageCatalog>(
    AC.LOADER_IN_IMAGE_CATALOG,
    (loader: boolean) => ({
        loader
    })
)
