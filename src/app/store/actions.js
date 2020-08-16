import AC from '@/app/constants/actionsConstants'

export const setTodayData = (data) => ({
    type: AC.SET_TODAY_DATA,
    date: data.date,
    url: data.url,
    explanation: data.explanation,
    title: data.title,
    mediaType: data.mediaType
})

export const setMainImage = (data) => ({
    type: AC.CHANGE_MAIN_IMAGE,
    date: data.date,
    url: data.url,
    explanation: data.explanation,
    title: data.title,
    mediaType: data.mediaType
})


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


export const setStateForModalWindow = (state) => ({
    type: AC.SET_STATE_FOR_MODAL_WINDOW,
    state
})

export const setTitleForModalWindow = (title) => ({
    type: AC.SET_TITLE_FOR_MODAL_WINDOW,
    title
})

export const setMainDataForModalWindow = (mainData) => ({
    type: AC.SET_MAIN_DATA_FOR_MODAL_WINDOW,
    mainData
})

export const setDateForModalWindow = (date) => ({
    type: AC.SET_DATE_FOR_MODAL_WINDOW,
    date
})

export const setExplanationForModalWindow = (explanation) => ({
    type: AC.SET_EXPLANATION_FOR_MODAL_WINDOW,
    explanation
})
