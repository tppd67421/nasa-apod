import { createReducer } from 'redux-act'
import { ISetMainImage, ISetTodayData } from '@/types/actions'
import { IMainImageState } from '@/types/state'
import { setMainImage, setTodayData } from '../actions/mainImageActions'

const initialState: IMainImageState = {
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

const mainImageReducer = createReducer<IMainImageState>({}, initialState)

const setTodayDataReducer = (
    state: IMainImageState, action: ISetTodayData
) => ({
    ...state,
    todayData: {
        date: action.date,
        url: action.url,
        explanation: action.explanation,
        title: action.title,
        mediaType: action.mediaType
    }
})

const setMainImageReducer = (
    state: IMainImageState, action: ISetMainImage
) => ({
    ...state,
    imageData: {
        date: action.date,
        url: action.url,
        explanation: action.explanation,
        title: action.title,
        mediaType: action.mediaType
    }
})

mainImageReducer.on(setTodayData, setTodayDataReducer)
mainImageReducer.on(setMainImage, setMainImageReducer)


export default mainImageReducer
