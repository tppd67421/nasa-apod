import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MainImageContainer from './components/MainImage/MainImageContainer'
import ImageCatalogContainer from './components/ImageCatalog/ImageCatalogContainer'
import ModalWindowContainer from './components/ModalWindow/ModalWindowContainer'
import Preloader from './components/Preloader/Preloader'
import C from '@/constants/appConstants'
import { IAppState } from './store/types/state'

const App = () => {
  const itemsCounterForPreloader: number = useSelector(
    (state: IAppState) => state.preloader.itemsCounterForPreloader
  )

  // if user reload page (like f5) he may not be at the top of the page
  useEffect(() => {
    // 10 - this random number (not more all items in first iteration, 25)
    // it helps to delay the user's movement to the top of the page
    // necessary for the user to move after the browser event fires
    // (moving the user to the place where he reloaded the page)
    itemsCounterForPreloader === 10 && window.scroll(0, 0)
  }, [itemsCounterForPreloader])

  // itemsCounterForPreloader < C.ITEMS_ON_PAGE_WITH_FIRST_ITERATION
  //   ? (document.body.style.overflow = 'hidden')
  //   : document.body.removeAttribute('style')

  return (
    <>
      {/* <Preloader
        className={itemsCounterForPreloader < C.ITEMS_ON_PAGE_WITH_FIRST_ITERATION ? '' : 'hide'}
      /> */}
      <MainImageContainer />
      {/* <ImageCatalogContainer />
      <ModalWindowContainer /> */}
    </>
  )
}

export default App
