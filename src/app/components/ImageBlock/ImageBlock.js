import React, { useContext, useRef } from 'react'
import C from '@/app/constants/appConstants'
import { MainImageDataContext } from '@/app/helpers/context'

const ImageBlock = ({
    modalWindowShowed,
    setStateForModalWindow,
    setTitleForModalWindow,
    setMainDataForModalWindow,
    setDateForModalWindow,
    setExplanationForModalWindow,
    mainImage,
    itemsFromImageCatalog
}) => {
    const data = useContext(MainImageDataContext);
    const image = useRef();

    const changeStateForModalWindow = (attribute) => {
        switch (attribute) {
            case C.MAIN_IMAGE_ATTRIBUTE:
                setTitleForModalWindow(mainImage.title)
                setMainDataForModalWindow(mainImage.url)
                setDateForModalWindow(mainImage.date)
                setExplanationForModalWindow(mainImage.explanation)
                break;

            default:
                const targetItem = itemsFromImageCatalog[attribute]
                setTitleForModalWindow(targetItem.title)
                setMainDataForModalWindow(targetItem.hdurl)
                setDateForModalWindow(targetItem.date)
                setExplanationForModalWindow(targetItem.explanation)
                break;
        }
    }
    
    const changeModalWindow = () => {
        if (!modalWindowShowed) {
            changeStateForModalWindow(image.current.getAttribute('data-item-counter'))
            setStateForModalWindow(true)
        } else {
            setStateForModalWindow(false)
        }
    }

    return (
        <div className={data.className}>
            <img
                ref={image}
                src={data.url}
                className='image'
                data-item-counter={data.itemCounter}
                onClick={() => changeModalWindow()}
            />
        </div>
    )
}

export default ImageBlock
