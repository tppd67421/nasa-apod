import AC from '@/constants/actionsConstants'
import { MainImageTypes } from '@/types/actions'
import { IMainImageItem } from '@/types/main'

export const setTodayData = (data: IMainImageItem): MainImageTypes => ({
    type: AC.SET_TODAY_DATA,
    date: data.date,
    url: data.url,
    explanation: data.explanation,
    title: data.title,
    mediaType: data.mediaType
})

export const setMainImage = (data: IMainImageItem): MainImageTypes => ({
    type: AC.CHANGE_MAIN_IMAGE,
    date: data.date,
    url: data.url,
    explanation: data.explanation,
    title: data.title,
    mediaType: data.mediaType
})
