import { makeAutoObservable } from 'mobx'
import { ISetMainImage, ISetTodayData } from './types/actions'
import { IMainImageItem } from './types/imageItems'

class MainImage {
  imageData = {
    date: '',
    url: '',
    explanation: '',
    title: '',
    mediaType: '',
  }
  todayData = {
    date: '',
    url: '',
    explanation: '',
    title: '',
    mediaType: '',
  }

  constructor() {
    makeAutoObservable(this)
  }

  setTodayData = (action: any) => {
    this.todayData = {
      date: action.date,
      url: action.url,
      explanation: action.explanation,
      title: action.title,
      mediaType: action.mediaType,
    }
  }

  setMainImage = (action: any) => {
    this.imageData = {
      date: action.date,
      url: action.url,
      explanation: action.explanation,
      title: action.title,
      mediaType: action.mediaType,
    }
  }
}

const mainImageStore = new MainImage()

export default mainImageStore
