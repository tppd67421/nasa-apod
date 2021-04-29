import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MainImageContainer from './MainImage/MainImageContainer'
import ImageCatalogContainer from './ImageCatalog/ImageCatalogContainer'
import ModalWindowContainer from './ModalWindow/ModalWindowContainer'
import Preloader from './Preloader/Preloader'
import C from '@/constants/appConstants'

const App = ({ itemsCounterForPreloader }) => {
    // if user reload page (like f5) he may not be at the top of the page
    useEffect(() => {
        // 10 - this random number (not more all items in first iteration, 25)
        // it helps to delay the user's movement to the top of the page
        // necessary for the user to move after the browser event fires
        // (moving the user to the place where he reloaded the page)
        itemsCounterForPreloader === 10 && window.scroll(0, 0)
    }, [itemsCounterForPreloader])

    itemsCounterForPreloader < C.ITEMS_ON_PAGE_WITH_FIRST_ITERATION
        ? document.body.style.overflow = 'hidden'
        : document.body.removeAttribute('style')

    return (
        <>
            <Preloader className={
                itemsCounterForPreloader < C.ITEMS_ON_PAGE_WITH_FIRST_ITERATION
                    ? ''
                    : 'hide'
            } />
            <MainImageContainer />
            <ImageCatalogContainer />
            <ModalWindowContainer />
        </>
    )
}

const mapStateToProps = (state) => ({
    itemsCounterForPreloader: state.preloader.itemsCounterForPreloader
})

export default connect(
    mapStateToProps
)(App)
