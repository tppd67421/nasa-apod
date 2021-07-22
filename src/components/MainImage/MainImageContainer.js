import { observer } from 'mobx-react-lite'
import mainImageStore from '@/store/MainImageStore'
import MainImage from './MainImage'

const MainImageContainer = () => (
  <MainImage
    mainImage={mainImageStore}
    imageData={mainImageStore.imageData}
    todayData={mainImageStore.todayData}
    setTodayData={mainImageStore.setTodayData}
    changeImage={mainImageStore.setMainImage}
  />
)

export default observer(MainImageContainer)
