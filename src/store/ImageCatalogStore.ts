import { makeAutoObservable } from 'mobx'
import {
  ChangeDataIntervalInImageCatalog,
  CountItemsForOneIteration,
  LoaderInImageCatalog,
  LoadImagesForOneIterationToImageCatalog,
  LoadImagesToImageCatalog,
} from './types/actions'
import { ImageCatalogItem } from './types/imageItems'

class MainImage {
  items: ImageCatalogItem[] = []
  itemsForOneIteration: ImageCatalogItem[] = []
  date: { startDateValue: string | null; endDateValue: string | null } = {
    startDateValue: null,
    endDateValue: null,
  }
  itemsCounterForOneIteration = 0
  loader = true

  constructor() {
    makeAutoObservable(this)
  }

  loadImagesToImageCatalog = (action: LoadImagesToImageCatalog[]) => {
    this.items = action
  }
  loadImagesForOneIterationToImageCatalog = (action: LoadImagesForOneIterationToImageCatalog[]) => {
    this.itemsForOneIteration = action
  }
  changeDateIntervalInImageCatalog = (action: ChangeDataIntervalInImageCatalog) => {
    this.date.startDateValue = action.startDateValue
    this.date.endDateValue = action.endDateValue
  }
  countItemsForOneIteration = (action: CountItemsForOneIteration) => {
    this.itemsCounterForOneIteration = action
  }
  loaderInImageCatalog = (action: LoaderInImageCatalog) => {
    this.loader = action
  }
}

const mainImageStore = new MainImage()

export default mainImageStore
