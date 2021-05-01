import { createReducer } from 'redux-act'
import { IModalWindowState } from '@/types/state'
import {
    ISetDateForModalWindow,
    ISetExplanationForModalWindow,
    ISetMainDataForModalWindow,
    ISetStateForModalWindow,
    ISetTitleForModalWindow
} from '@/types/actions'
import {
    setDateForModalWindow,
    setExplanationForModalWindow,
    setMainDataForModalWindow,
    setStateForModalWindow,
    setTitleForModalWindow
} from '../actions/modalWindowActions'


const initialState: IModalWindowState = {
    modalWindowState: false,
    modalWindowTitle: null,
    modalWindowMainData: null,
    modalWindowDate: null,
    modalWindowExplanation: null
}

const modalWindowReducer = createReducer<IModalWindowState>({}, initialState)

const setStateForModalWindowReducer = (
    state: IModalWindowState, action: ISetStateForModalWindow
) => ({
    ...state,
    modalWindowState: action.state
})

const setTitleForModalWindowReducer = (
    state: IModalWindowState, action: ISetTitleForModalWindow
) => ({
    ...state,
    modalWindowTitle: action.title
})

const setMainDataForModalWindowReducer = (
    state: IModalWindowState, action: ISetMainDataForModalWindow
) => ({
    ...state,
    modalWindowMainData: action.mainData
})

const setDateForModalWindowReducer = (
    state: IModalWindowState, action: ISetDateForModalWindow
) => ({
    ...state,
    modalWindowDate: action.date
})

const setExplanationForModalWindowReducer = (
    state: IModalWindowState, action: ISetExplanationForModalWindow
) => ({
    ...state,
    modalWindowExplanation: action.explanation
})

modalWindowReducer.on(setStateForModalWindow, setStateForModalWindowReducer)
modalWindowReducer.on(setTitleForModalWindow, setTitleForModalWindowReducer)
modalWindowReducer.on(setMainDataForModalWindow, setMainDataForModalWindowReducer)
modalWindowReducer.on(setDateForModalWindow, setDateForModalWindowReducer)
modalWindowReducer.on(setExplanationForModalWindow, setExplanationForModalWindowReducer)


export default modalWindowReducer
