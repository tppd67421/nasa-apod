import C from '@/app/constants/constants'

export const setTodayData = (data) => ({
    type: C.SET_TODAY_DATA,
    date: data.date,
    url: data.url,
    explanation: data.explanation,
    title: data.title,
    mediaType: data.mediaType
})

export const setMainImage = (data) => ({
    type: C.CHANGE_MAIN_IMAGE,
    date: data.date,
    url: data.url,
    explanation: data.explanation,
    title: data.title,
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


export const setStateForModalWindow = (state) => ({
    type: C.SET_STATE_FOR_MODAL_WINDOW,
    state
})

export const setTitleForModalWindow = (title) => ({
    type: C.SET_TITLE_FOR_MODAL_WINDOW,
    title
})

export const setMainDataForModalWindow = (mainData) => ({
    type: C.SET_MAIN_DATA_FOR_MODAL_WINDOW,
    mainData
})

export const setDateForModalWindow = (date) => ({
    type: C.SET_DATE_FOR_MODAL_WINDOW,
    date
})

export const setExplanationForModalWindow = (explanation) => ({
    type: C.SET_EXPLANATION_FOR_MODAL_WINDOW,
    explanation
})
