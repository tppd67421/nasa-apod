import AC from '@/constants/actionsConstants'
import { ModalWindowTypes } from '@/types/actions'
import { IModalWindow } from '@/types/state'


const initialState: IModalWindow = {
    modalWindowState: false,
    modalWindowTitle: null,
    modalWindowMainData: null,
    modalWindowDate: null,
    modalWindowExplanation: null
}

const modalWindowReducer = (state = initialState, action: any): IModalWindow => {
    switch (action.type) {
        case AC.SET_STATE_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowState: action.state
            }

        case AC.SET_TITLE_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowTitle: action.title
            }

        case AC.SET_MAIN_DATA_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowMainData: action.mainData
            }

        case AC.SET_DATE_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowDate: action.date
            }

        case AC.SET_EXPLANATION_FOR_MODAL_WINDOW:
            return {
                ...state,
                modalWindowExplanation: action.explanation
            }

        default:
            return state
    }
}

export default modalWindowReducer
