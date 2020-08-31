import React from 'react'
import { connect } from 'react-redux'
import MainImageContainer from './MainImage/MainImageContainer'
import ImageCatalogContainer from './ImageCatalog/ImageCatalogContainer'
import ModalWindowContainer from './ModalWindow/ModalWindowContainer'
import Preloader from './Preloader/Preloader'
import C from '@/app/constants/appConstants'

const App = ({ itemsCounterForPreloader }) => {
    itemsCounterForPreloader < C.ITEMS_ON_PAGE_WITH_FIRST_ITERATION
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'auto'

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
