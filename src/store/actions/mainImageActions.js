import AC from '@/constants/actionsConstants'

export const setTodayData = (data) => ({
    type: AC.SET_TODAY_DATA,
    date: data.date,
    url: data.url,
    explanation: data.explanation,
    title: data.title,
    mediaType: data.mediaType
})

export const setMainImage = (data) => ({
    type: AC.CHANGE_MAIN_IMAGE,
    date: data.date,
    url: data.url,
    explanation: data.explanation,
    title: data.title,
    mediaType: data.mediaType
})
