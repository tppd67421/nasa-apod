import AC from '@/constants/actionsConstants'
import { PreloaderTypes } from '@/types/actions'
import { IPreloader } from '@/types/state'

const initialState: IPreloader = {
    itemsCounterForPreloader: 0
}

const preloaderReducer = (state = initialState, action: PreloaderTypes): IPreloader => {
    switch (action.type) {
        case AC.UPDATE_ITEM_COUNTER_FOR_PRELOADER:
            return {
                ...state,
                itemsCounterForPreloader: action.counter
            }

        default:
            return state
    }
}

export default preloaderReducer
