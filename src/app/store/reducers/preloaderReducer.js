import AC from '@/app/constants/actionsConstants'

const preloaderReducer = (state = {}, action) => {
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
