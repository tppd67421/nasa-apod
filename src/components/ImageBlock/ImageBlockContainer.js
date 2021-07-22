import { observer } from 'mobx-react-lite'
import mainImageStore from '@/store/MainImageStore'
import modalWindowStore from '@/store/ModalWindowStore'
import imageCatalogStore from '@/store/ImageCatalogStore'
import preloaderStore from '@/store/PreloaderStore'
import ImageBlock from './ImageBlock'

const ImageBlockContainer = () => (
  <ImageBlock
    modalWindowShowed={modalWindowStore.modalWindowState}
    mainImage={mainImageStore.imageData}
    todayImage={mainImageStore.todayData}
    setStateForModalWindow={modalWindowStore.setStateForModalWindow}
    setTitleForModalWindow={modalWindowStore.setTitleForModalWindow}
    setMainDataForModalWindow={modalWindowStore.setMainDataForModalWindow}
    setDateForModalWindow={modalWindowStore.setDateForModalWindow}
    setExplanationForModalWindow={modalWindowStore.setExplanationForModalWindow}
    setTypeForModalWindow={modalWindowStore.setTypeForModalWindow}
    itemsCounterForPreloader={preloaderStore.itemsCounterForPreloader}
    itemsFromImageCatalog={imageCatalogStore.items}
    updateItemsCounterForPreloader={preloaderStore.updateItemsCounterForPreloader}
  />
)

export default observer(ImageBlockContainer)
