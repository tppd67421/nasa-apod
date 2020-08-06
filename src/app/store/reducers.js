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
                    mediaType: action.mediaType
                }
            }

        case C.CHANGE_MAIN_IMAGE:
            return {
                ...state,
                imageData: {
                    date: action.date,
                    url: action.url,
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

export default combineReducers({ mainImage, imageCatalog })
