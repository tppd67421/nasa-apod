import { makeAutoObservable } from 'mobx'
import { ItemsCounterForPreloader } from './types/actions'

class Preloader {
  itemsCounterForPreloader = 0

  constructor() {
    makeAutoObservable(this)
  }

  updateItemsCounterForPreloader = (action: ItemsCounterForPreloader) => {
    this.itemsCounterForPreloader = action
  }
}

const preloaderStore = new Preloader()

export default preloaderStore
