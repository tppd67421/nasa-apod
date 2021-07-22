import { makeAutoObservable } from 'mobx'
import {
  DateForModalWindow,
  ExplanationForModalWindow,
  MainDataForModalWindow,
  StateForModalWindow,
  TitleForModalWindow,
  TypeModalWindow,
} from './types/actions'

class ModalWindow {
  modalWindowState: boolean = false
  modalWindowTitle: string | null = null
  modalWindowMainData: string | null = null
  modalWindowDate: string | null = null
  modalWindowExplanation: string | null = null
  modalWindowType: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setStateForModalWindow = (action: StateForModalWindow) => {
    this.modalWindowState = action
  }
  setTitleForModalWindow = (action: TitleForModalWindow) => {
    this.modalWindowTitle = action
  }
  setMainDataForModalWindow = (action: MainDataForModalWindow) => {
    this.modalWindowMainData = action
  }
  setDateForModalWindow = (action: DateForModalWindow) => {
    this.modalWindowDate = action
  }
  setExplanationForModalWindow = (action: ExplanationForModalWindow) => {
    this.modalWindowExplanation = action
  }
  setTypeForModalWindow = (action: TypeModalWindow) => {
    this.modalWindowType = action
  }
}

const modalWindowStore = new ModalWindow()

export default modalWindowStore
