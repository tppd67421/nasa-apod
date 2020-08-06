import C from '@/app/constants/constants'

export const setTodayData = (data) => ({
    type: C.SET_TODAY_DATA,
    date: data.date,
    url: data.url,
    mediaType: data.mediaType
})

export const setMainImage = (data) => ({
    type: C.CHANGE_MAIN_IMAGE,
    date: data.date,
    url: data.url,
    mediaType: data.mediaType
})

export const loadImagesToImageCatalog = (items) => ({
    type: C.LOAD_IMAGES_TO_IMAGE_CATALOG,
    items
})

export const loadImagesForOneIterationToImageCatalog = (items) => ({
    type: C.LOAD_IMAGES_FOR_ONE_ITERATION_TO_IMAGE_CATALOG,
    items
})

export const changeDataIntervalInImageCatalog = (startDateValue, endDateValue) => ({
    type: C.CHANGE_DATA_INTERVAL_IN_IMAGE_CATALOG,
    startDateValue,
    endDateValue
})

export const countItemsForOneIteration = (counter) => ({
    type: C.ITEMS_COUNTER_FOR_ONE_ITERATION,
    counter
})

export const loaderInImageCatalog = (loader) => ({
    type: C.LOADER_IN_IMAGE_CATALOG,
    loader
})
