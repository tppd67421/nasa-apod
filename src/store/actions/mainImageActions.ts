import { createAction } from 'redux-act'
import AC from '@/constants/actionsConstants'
import { ISetMainImage, ISetTodayData } from '@/types/actions'
import { IMainImageItem } from '@/types/imageItems'

export const setTodayData = createAction<ISetTodayData>(
    AC.SET_TODAY_DATA,
    (data: IMainImageItem) => ({
        date: data.date,
        url: data.url,
        explanation: data.explanation,
        title: data.title,
        mediaType: data.mediaType
    })
)

export const setMainImage = createAction<ISetMainImage>(
    AC.CHANGE_MAIN_IMAGE,
    (data: IMainImageItem) => ({
        date: data.date,
        url: data.url,
        explanation: data.explanation,
        title: data.title,
        mediaType: data.mediaType
    })
)
