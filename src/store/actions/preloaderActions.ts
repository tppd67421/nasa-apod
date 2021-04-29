import AC from '@/constants/actionsConstants'
import { PreloaderTypes } from '@/types/actions'

export const updateItemsCounterForPreloader = (counter: number): PreloaderTypes => ({
    type: AC.UPDATE_ITEM_COUNTER_FOR_PRELOADER,
    counter
})
