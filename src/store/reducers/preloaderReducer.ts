import { createReducer } from 'redux-act'
import { IPreloaderState } from '@/types/state'
import { updateItemsCounterForPreloader } from '../actions/preloaderActions'
import { IUpdateItemsCounterForPreloader } from '@/types/actions'

const initialState: IPreloaderState = {
    itemsCounterForPreloader: 0
}

const preloaderReducer = createReducer<IPreloaderState>({}, initialState)

const updateItemsCounterForPreloaderReducer = (
    state: IPreloaderState, action: IUpdateItemsCounterForPreloader
) => ({
    ...state,
    itemsCounterForPreloader: action.counter
})

preloaderReducer.on(updateItemsCounterForPreloader, updateItemsCounterForPreloaderReducer)


export default preloaderReducer
