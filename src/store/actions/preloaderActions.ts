import { createAction } from 'redux-act'
import AC from '@/constants/actionsConstants'
import { IUpdateItemsCounterForPreloader } from '@/types/actions'

export const updateItemsCounterForPreloader = createAction<IUpdateItemsCounterForPreloader>(
    AC.UPDATE_ITEM_COUNTER_FOR_PRELOADER,
    (counter: number) => ({
        counter
    })
)

// export const updateItemsCounterForPreloader = (counter: number): PreloaderTypes => ({
//     type: AC.UPDATE_ITEM_COUNTER_FOR_PRELOADER,
//     counter
// })
