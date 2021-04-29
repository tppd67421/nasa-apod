import AC from '@/constants/actionsConstants'
import { ModalWindowTypes } from '@/types/actions'
import React from 'react'

export const setStateForModalWindow = (state: boolean): ModalWindowTypes => ({
    type: AC.SET_STATE_FOR_MODAL_WINDOW,
    state
})

export const setTitleForModalWindow = (title: string | null): ModalWindowTypes => ({
    type: AC.SET_TITLE_FOR_MODAL_WINDOW,
    title
})

export const setMainDataForModalWindow = (mainData: React.ReactNode): ModalWindowTypes => ({
    type: AC.SET_MAIN_DATA_FOR_MODAL_WINDOW,
    mainData
})

export const setDateForModalWindow = (date: string | null): ModalWindowTypes => ({
    type: AC.SET_DATE_FOR_MODAL_WINDOW,
    date
})

export const setExplanationForModalWindow = (explanation: string | null): ModalWindowTypes => ({
    type: AC.SET_EXPLANATION_FOR_MODAL_WINDOW,
    explanation
})
