import { observer } from 'mobx-react-lite'
import modalWindowStore from '@/store/ModalWindowStore'
import mainImageStore from '@/store/MainImageStore'
import imageCatalogStore from '@/store/ImageCatalogStore'
import preloaderStore from '@/store/PreloaderStore'
import VideoBlock from './VideoBlock'

const VideoBlockContainer = () => (
  <VideoBlock
    modalWindowShowed={modalWindowStore.modalWindowState}
    mainImage={mainImageStore.imageData}
    todayImage={mainImageStore.todayData}
    itemsFromImageCatalog={imageCatalogStore.items}
    itemsCounterForPreloader={preloaderStore.itemsCounterForPreloader}
    setStateForModalWindow={modalWindowStore.setStateForModalWindow}
    setTitleForModalWindow={modalWindowStore.setTitleForModalWindow}
    setMainDataForModalWindow={modalWindowStore.setMainDataForModalWindow}
    setDateForModalWindow={modalWindowStore.setDateForModalWindow}
    setExplanationForModalWindow={modalWindowStore.setExplanationForModalWindow}
    setTypeForModalWindow={modalWindowStore.setTypeForModalWindow}
    updateItemsCounterForPreloader={preloaderStore.updateItemsCounterForPreloader}
  />
)

export default observer(VideoBlockContainer)
