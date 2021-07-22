import { observer } from 'mobx-react-lite'
import mainImageStore from '@/store/MainImageStore'
import imageCatalogStore from '@/store/ImageCatalogStore'
import ImageCatalog from './ImageCatalog'

const ImageCatalogContainer = () => (
  <ImageCatalog
    imagesArray={imageCatalogStore.items}
    imagesArrayForOneIteration={imageCatalogStore.itemsForOneIteration}
    dateInterval={imageCatalogStore.date}
    itemsCounterForOneIteration={imageCatalogStore.itemsCounterForOneIteration}
    loader={imageCatalogStore.loader}
    todayDate={mainImageStore.todayData.date}
    loadImages={imageCatalogStore.loadImagesToImageCatalog}
    loadImagesToOneIteration={imageCatalogStore.loadImagesForOneIterationToImageCatalog}
    changeDateInterval={imageCatalogStore.changeDateIntervalInImageCatalog}
    countItemsForOneIteration={imageCatalogStore.countItemsForOneIteration}
    changeLoader={imageCatalogStore.loaderInImageCatalog}
  />
)

export default observer(ImageCatalogContainer)
