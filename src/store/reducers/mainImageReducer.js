import AC from '@/constants/actionsConstants'

const mainImageReducer = (state = {}, action) => {
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
