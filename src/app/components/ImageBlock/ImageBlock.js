import React, { useContext } from 'react'
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
    const data = useContext(MainImageDataContext)

    const imgCreator = (imgLink) => (
        <a href={imgLink}  target='_blank'>
            <img
                className='modal-window__main-data'
                src={imgLink}
            />
        </a>
    )

    const changeStateForModalWindow = (attribute) => {
        switch (attribute) {
            case C.MAIN_IMAGE_ATTRIBUTE:
                if (checkTodayDate(mainImage.date)) {
                    setTitleForModalWindow(todayImage.title)
                    setMainDataForModalWindow(imgCreator(todayImage.url))
                    setExplanationForModalWindow(todayImage.explanation)
                    setDateForModalWindow(todayImage.date)
                } else {
                    setTitleForModalWindow(mainImage.title)
                    setMainDataForModalWindow(imgCreator(mainImage.url))
                    setExplanationForModalWindow(mainImage.explanation)
                    setDateForModalWindow(mainImage.date)
                }
                break

            default:
                const targetItem = itemsFromImageCatalog[attribute]
                setTitleForModalWindow(targetItem.title)
                setMainDataForModalWindow(imgCreator(targetItem.hdurl))
                setExplanationForModalWindow(targetItem.explanation)
                setDateForModalWindow(targetItem.date)
                break
        }
    }

    const changeModalWindow = () => {
        if (!modalWindowShowed) {
            changeStateForModalWindow(data.itemCounter)
            setStateForModalWindow(true)
        }
    }

    return (
        <>
            <img
                src={data.url}
                className={data.className}
                data-item-counter={data.itemCounter}
                onClick={() => changeModalWindow()}
            />
        </>
    )
}

export default ImageBlock
