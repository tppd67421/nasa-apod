import { createSlice } from '@reduxjs/toolkit'
import { ISetMainImage, ISetTodayData } from '@/store/types/actions'
import { IMainImageState } from '@/store/types/state'

const initialState: IMainImageState = {
  imageData: {
    date: '',
    url: '',
    explanation: '',
    title: '',
    mediaType: '',
  },
  todayData: {
    date: '',
    url: '',
    explanation: '',
    title: '',
    mediaType: '',
  },
}

const mainImageSlice = createSlice({
  name: 'mainImage',
  initialState,
  reducers: {
    setTodayData(state: IMainImageState, action: ISetTodayData) {
      state.todayData = {
        date: action.payload.date,
        url: action.payload.url,
        explanation: action.payload.explanation,
        title: action.payload.title,
        mediaType: action.payload.mediaType,
      }
    },
    setMainImage(state: IMainImageState, action: ISetMainImage) {
      state.imageData = {
        date: action.payload.date,
        url: action.payload.url,
        explanation: action.payload.explanation,
        title: action.payload.title,
        mediaType: action.payload.mediaType,
      }
    },
  },
})

export const { setTodayData, setMainImage } = mainImageSlice.actions

export default mainImageSlice.reducer
