import { combineReducers } from 'redux'
import C from '@/app/constants/constants'

const mainImage = (state = {}, action) => {
    switch (action.type) {
        case C.SET_TODAY_DATA:
            return {
                ...state,
                todayData: {
                    date: action.date,
                    url: action.url,
                    explanation: action.explanation,
                    title: action.title,
                    mediaType: action.mediaType
                }
            }

        case C.CHANGE_MAIN_IMAGE:
            return {
                ...state,
                imageData: {
                    date: action.date,
                    url: action.url,
                    explanation: action.explanation,
                    title: action.title,
                    mediaType: action.mediaType
                }
            }

        default:
            return state
    }
}

const imageCatalog = (state = {}, action) => {
    switch (action.type) {
        case C.LOAD_IMAGES_TO_IMAGE_CATALOG:
            return {
                ...state,
                items: action.items
            }

        case C.LOAD_IMAGES_FOR_ONE_ITERATION_TO_IMAGE_CATALOG:
            return {
                ...state,
                itemsForOneIteration: action.items
            }

        case C.CHANGE_DATA_INTERVAL_IN_IMAGE_CATALOG:
            return {
                ...state,
                date: {
                    startDateValue: action.startDateValue,
                    endDateValue: action.endDateValue
                }
            }

        case C.ITEMS_COUNTER_FOR_ONE_ITERATION:
            return {
                ...state,
                itemsCounterForOneIteration: action.counter
            }

        case C.LOADER_IN_IMAGE_CATALOG:
            return {
                ...state,
                loader: action.loader
            }

        default:
            return state
    }
}

const modalWindow = (state = {}, action) => {
    switch (action.type) {
        case C.SET_STATE_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowState: action.state
            }

        case C.SET_TITLE_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowTitle: action.title
            }

        case C.SET_MAIN_DATA_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowMainData: action.mainData
            }

        case C.SET_DATE_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowDate: action.date
            }

        case C.SET_EXPLANATION_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowExplanation: action.explanation
            }
    
        default:
            return state
    }
}

export default combineReducers({ mainImage, imageCatalog, modalWindow })
