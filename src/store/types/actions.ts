import C from '@/constants/appConstants'
import { ImageCatalogItem, MainImageItem } from './imageItems'

// Main Image
export type TodayData = MainImageItem
export type MainImageType = MainImageItem

// Image Catalog
export type LoadImagesToImageCatalog = ImageCatalogItem
export type LoadImagesForOneIterationToImageCatalog = ImageCatalogItem
export type ChangeDataIntervalInImageCatalog = {
  startDateValue: string | null
  endDateValue: string | null
}
export type CountItemsForOneIteration = number
export type LoaderInImageCatalog = boolean

// Modal Window
export type StateForModalWindow = boolean
export type TitleForModalWindow = string | null
export type MainDataForModalWindow = string | null
export type DateForModalWindow = string | null
export type ExplanationForModalWindow = string | null
export type TypeModalWindow = typeof C.MODAL_WINDOW_IMAGE | typeof C.MODAL_WINDOW_VIDEO | null

// Preloader
export type ItemsCounterForPreloader = number
