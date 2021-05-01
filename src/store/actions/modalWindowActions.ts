import React from 'react'
import { createAction } from 'redux-act'
import AC from '@/constants/actionsConstants'
import {
    ISetStateForModalWindow,
    ISetTitleForModalWindow,
    ISetMainDataForModalWindow,
    ISetDateForModalWindow,
    ISetExplanationForModalWindow,
} from '@/types/actions'


export const setStateForModalWindow = createAction<ISetStateForModalWindow>(
    AC.SET_STATE_FOR_MODAL_WINDOW,
    (state: boolean) => ({
        state
    })
)

export const setTitleForModalWindow = createAction<ISetTitleForModalWindow>(
    AC.SET_TITLE_FOR_MODAL_WINDOW,
    (title: string | null) => ({
        title
    })
)

export const setMainDataForModalWindow = createAction<ISetMainDataForModalWindow>(
    AC.SET_MAIN_DATA_FOR_MODAL_WINDOW,
    (mainData: React.ReactNode) => ({
        mainData
    })
)

export const setDateForModalWindow = createAction<ISetDateForModalWindow>(
    AC.SET_DATE_FOR_MODAL_WINDOW,
    (date: string | null) => ({
        date
    })
)

export const setExplanationForModalWindow = createAction<ISetExplanationForModalWindow>(
    AC.SET_EXPLANATION_FOR_MODAL_WINDOW,
    (explanation: string | null) => ({
        explanation
    })
)
