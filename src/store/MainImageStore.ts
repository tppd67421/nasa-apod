import { makeAutoObservable } from 'mobx'
import { MainImageType, TodayData } from './types/actions'

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

  setMainImage = (action: MainImageType) => {
    this.imageData = {
      date: action.date,
      url: action.url,
      explanation: action.explanation,
      title: action.title,
      mediaType: action.mediaType,
    }
  }

  setTodayData = (action: TodayData) => {
    this.todayData = {
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
