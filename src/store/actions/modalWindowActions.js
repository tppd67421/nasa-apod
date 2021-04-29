import AC from '@/constants/actionsConstants'

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
