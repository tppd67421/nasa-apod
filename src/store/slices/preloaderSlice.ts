import { createSlice } from '@reduxjs/toolkit'
import { IPreloaderState } from '@/store/types/state'
import { IUpdateItemsCounterForPreloader } from '@/store/types/actions'

const initialState: IPreloaderState = {
  itemsCounterForPreloader: 0,
}

const preloaderSlice = createSlice({
  name: 'preloader',
  initialState,
  reducers: {
    updateItemsCounterForPreloader(
      state: IPreloaderState,
      action: IUpdateItemsCounterForPreloader
    ) {
      state.itemsCounterForPreloader = action.payload
    },
  },
})

export const { updateItemsCounterForPreloader } = preloaderSlice.actions

export default preloaderSlice.reducer
