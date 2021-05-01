import { createReducer } from 'redux-act'
import { IImageCatalogState } from '@/types/state'
import {
    IChangeDataIntervalInImageCatalog,
    ICountItemsForOneIteration,
    ILoaderInImageCatalog,
    ILoadImagesForOneIterationToImageCatalog,
    ILoadImagesToImageCatalog
} from '@/types/actions';
import {
    changeDataIntervalInImageCatalog,
    countItemsForOneIteration,
    loaderInImageCatalog,
    loadImagesForOneIterationToImageCatalog,
    loadImagesToImageCatalog
} from '../actions/imageCatalogActions';


const initialState: IImageCatalogState = {
    items: [],
    itemsForOneIteration: [],
    date: {
        startDateValue: null,
        endDateValue: null
    },
    itemsCounterForOneIteration: 0,
    loader: true
}

const imageCatalogReducer = createReducer<IImageCatalogState>({}, initialState)

const loadImagesToImageCatalogReducer = (
    state: IImageCatalogState, action: ILoadImagesToImageCatalog
) => ({
    ...state,
    items: action.items
})

const loadImagesForOneIterationToImageCatalogReducer = (
    state: IImageCatalogState, action: ILoadImagesForOneIterationToImageCatalog
) => ({
    ...state,
    itemsForOneIteration: action.items
})

const changeDataIntervalInImageCatalogReducer = (
    state: IImageCatalogState, action: IChangeDataIntervalInImageCatalog
) => ({
    ...state,
    date: {
        startDateValue: action.startDateValue,
        endDateValue: action.endDateValue
    }
})

const countItemsForOneIterationReducer = (
    state: IImageCatalogState, action: ICountItemsForOneIteration
) => ({
    ...state,
    itemsCounterForOneIteration: action.counter
})

const loaderInImageCatalogReducer = (
    state: IImageCatalogState, action: ILoaderInImageCatalog
) => ({
    ...state,
    loader: action.loader
})

imageCatalogReducer.on(loadImagesToImageCatalog, loadImagesToImageCatalogReducer)
imageCatalogReducer.on(loadImagesForOneIterationToImageCatalog, loadImagesForOneIterationToImageCatalogReducer)
imageCatalogReducer.on(changeDataIntervalInImageCatalog, changeDataIntervalInImageCatalogReducer)
imageCatalogReducer.on(countItemsForOneIteration, countItemsForOneIterationReducer)
imageCatalogReducer.on(loaderInImageCatalog, loaderInImageCatalogReducer)


export default imageCatalogReducer
