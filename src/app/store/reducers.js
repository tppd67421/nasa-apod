import { combineReducers } from 'redux'
import C from '@/app/constants'

const mainImage = (state = {}, action) => {
    switch (action.type) {
        case C.CHANGE_MAIN_IMAGE:
            return {
                ...state,
                date: action.date,
                url: action.url,
                mediaType: action.mediaType
            }
    
        default:
            return state
    }
}

const imageCatalog = (state = {}, action) => {
    switch (action.type) {
        case C.LOAD_IMAGE_TO_IMAGE_CATALOG:
            return state
    
        default:
            return state
    }
}

export default combineReducers({ mainImage, imageCatalog })
