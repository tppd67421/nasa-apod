import React, { useEffect, useContext, useRef } from 'react'
import C from '@/app/constants/appConstants'
import checkTodayDate from '@/app/helpers/checkTodayDate'
import checkImageInCache from '@/app/helpers/checkImageInCache'
import { MainImageDataContext } from '@/app/helpers/context'
import './ImageBlock.scss'

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
    const imageWrap = useRef()

    useEffect(() => {
        if (checkImageInCache(data.url)) {
            imageWrap.current.classList.remove(C.CLASS_FOR_LOADED_ELEMENTS)
        } else {
            imageWrap.current.classList.add(C.CLASS_FOR_LOADED_ELEMENTS)
        }
        return () => imageWrap.current.classList.remove(C.CLASS_FOR_LOADED_ELEMENTS)
    }, [data.url])

    const imgCreator = (imgLink) => (
        <a href={imgLink} target='_blank' className={C.CLASS_FOR_LOADED_ELEMENTS}>
            <img
                className='modal-window__main-data'
                src={imgLink}
                onLoad={
                    (e) => e.target
                        .closest(`.${C.CLASS_FOR_LOADED_ELEMENTS}`)
                        .classList.remove(C.CLASS_FOR_LOADED_ELEMENTS)
                }
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

    const imageLoaded = () => {
        imageWrap.current.classList.remove(C.CLASS_FOR_LOADED_ELEMENTS)
    }

    return (
        <div
            className={`${data.className}-wrap ${C.CLASS_FOR_LOADED_ELEMENTS}`}
            ref={imageWrap}
        >
            <img
                src={data.url}
                className={data.className}
                data-item-counter={data.itemCounter}
                onClick={() => changeModalWindow()}
                onLoad={() => imageLoaded()}
            />
        </div>
    )
}

export default ImageBlock
