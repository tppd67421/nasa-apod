import AC from '@/constants/actionsConstants'

export const loadImagesToImageCatalog = (items) => ({
    type: AC.LOAD_IMAGES_TO_IMAGE_CATALOG,
    items
})

export const loadImagesForOneIterationToImageCatalog = (items) => ({
    type: AC.LOAD_IMAGES_FOR_ONE_ITERATION_TO_IMAGE_CATALOG,
    items
})

export const changeDataIntervalInImageCatalog = (startDateValue, endDateValue) => ({
    type: AC.CHANGE_DATA_INTERVAL_IN_IMAGE_CATALOG,
    startDateValue,
    endDateValue
})

export const countItemsForOneIteration = (counter) => ({
    type: AC.ITEMS_COUNTER_FOR_ONE_ITERATION,
    counter
})

export const loaderInImageCatalog = (loader) => ({
    type: AC.LOADER_IN_IMAGE_CATALOG,
    loader
})
