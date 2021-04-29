import C from '@/constants/appConstants'

const removeParentClass = (element) => {
    element
        .closest(`.${C.CLASS_FOR_LOADED_ELEMENTS}`)
        .classList.remove(C.CLASS_FOR_LOADED_ELEMENTS)
}

export default removeParentClass
