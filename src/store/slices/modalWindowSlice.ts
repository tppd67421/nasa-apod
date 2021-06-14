import { createSlice } from '@reduxjs/toolkit'
import { IModalWindowState } from '@/store/types/state'
import {
  ISetDateForModalWindow,
  ISetExplanationForModalWindow,
  ISetMainDataForModalWindow,
  ISetTypeModalWindow,
  ISetStateForModalWindow,
  ISetTitleForModalWindow,
} from '@/store/types/actions'

const initialState: IModalWindowState = {
  modalWindowState: false,
  modalWindowTitle: null,
  modalWindowMainData: null,
  modalWindowDate: null,
  modalWindowExplanation: null,
  modalWindowType: null,
}

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    setStateForModalWindow(state: IModalWindowState, action: ISetStateForModalWindow) {
      state.modalWindowState = action.payload
    },
    setTitleForModalWindow(state: IModalWindowState, action: ISetTitleForModalWindow) {
      state.modalWindowTitle = action.payload
    },
    setMainDataForModalWindow(state: IModalWindowState, action: ISetMainDataForModalWindow) {
      state.modalWindowMainData = action.payload
    },
    setDateForModalWindow(state: IModalWindowState, action: ISetDateForModalWindow) {
      state.modalWindowDate = action.payload
    },
    setExplanationForModalWindow(state: IModalWindowState, action: ISetExplanationForModalWindow) {
      state.modalWindowExplanation = action.payload
    },
    setTypeForModalWindow(state: IModalWindowState, action: ISetTypeModalWindow) {
      state.modalWindowType = action.payload
    },
  },
})

export const {
  setStateForModalWindow,
  setTitleForModalWindow,
  setMainDataForModalWindow,
  setDateForModalWindow,
  setExplanationForModalWindow,
  setTypeForModalWindow,
} = modalWindowSlice.actions

export default modalWindowSlice.reducer
