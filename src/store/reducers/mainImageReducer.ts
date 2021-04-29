import AC from '@/constants/actionsConstants'
import { MainImageTypes } from '@/types/actions'
import { IMainImage } from '@/types/state'

const initialState: IMainImage = {
    imageData: {
        date: '',
        url: '',
        explanation: '',
        title: '',
        mediaType: ''
    },
    todayData: {
        date: '',
        url: '',
        explanation: '',
        title: '',
        mediaType: ''
    }
}

const mainImageReducer = (state = initialState, action: MainImageTypes): IMainImage => {
    switch (action.type) {
        case AC.SET_TODAY_DATA:
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

        case AC.CHANGE_MAIN_IMAGE:
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

export default mainImageReducer
