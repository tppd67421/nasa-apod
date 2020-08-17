import React, { useContext, useRef } from 'react'
import C from '@/app/constants/appConstants'
import checkTodayDate from '@/app/helpers/checkTodayDate'
import { MainImageDataContext } from '@/app/helpers/context'

const ImageBlock = ({
    modalWindowShowed,
    setStateForModalWindow,
    setTitleForModalWindow,
    setMainDataForModalWindow,
    setDateForModalWindow,
    setExplanationForModalWindow,
    mainImage,
    todayImage,
    itemsFromImageCatalog
}) => {
    const data = useContext(MainImageDataContext);
    const image = useRef();

    const changeStateForModalWindow = (attribute) => {
        switch (attribute) {
            case C.MAIN_IMAGE_ATTRIBUTE:
                setTitleForModalWindow(mainImage.title)
                setMainDataForModalWindow(mainImage.url)
                checkTodayDate(mainImage.date)
                    ? setDateForModalWindow(todayImage.date)
                    : setDateForModalWindow(mainImage.date)
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
        <>
            <img
                ref={image}
                src={data.url}
                className={data.className}
                data-item-counter={data.itemCounter}
                onClick={() => changeModalWindow()}
            />
        </>
    )
}

export default ImageBlock
