import AC from '@/constants/actionsConstants'

const imageCatalogReducer = (state = {}, action) => {
    switch (action.type) {
        case AC.LOAD_IMAGES_TO_IMAGE_CATALOG:
            return {
                ...state,
                items: action.items
            }

        case AC.LOAD_IMAGES_FOR_ONE_ITERATION_TO_IMAGE_CATALOG:
            return {
                ...state,
                itemsForOneIteration: action.items
            }

        case AC.CHANGE_DATA_INTERVAL_IN_IMAGE_CATALOG:
            return {
                ...state,
                date: {
                    startDateValue: action.startDateValue,
                    endDateValue: action.endDateValue
                }
            }

        case AC.ITEMS_COUNTER_FOR_ONE_ITERATION:
            return {
                ...state,
                itemsCounterForOneIteration: action.counter
            }

        case AC.LOADER_IN_IMAGE_CATALOG:
            return {
                ...state,
                loader: action.loader
            }

        default:
            return state
    }
}

export default imageCatalogReducer
