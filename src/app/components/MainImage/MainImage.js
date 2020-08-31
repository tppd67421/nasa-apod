import React, { useEffect, useRef } from 'react'
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType/RenderingContentDependingOnTheType';
import { writeToLocalStorage, readFromLocalStorage } from '@/app/helpers/workWithLocalStorage'
import queryString from '@/app/helpers/queryString'
import C from '@/app/constants/appConstants'
import { MainImageDataContext } from '@/app/helpers/context'
import checkTodayDate from '@/app/helpers/checkTodayDate'
import './MainImage.scss'

const MainImage = ({
    mainImage,
    imageData,
    changeImage,
    todayData,
    setTodayData,
    itemsCounterForPreloader,
    updateItemsCounterForPreloader
}) => {
    const dataFromLocalStorage = JSON.parse(readFromLocalStorage(C.LOCAL_STORAGE_KEY))

    const input = useRef();

    useEffect(() => {
        ajaxQuery()
// console.log(itemsCounterForPreloader)
// updateItemsCounterForPreloader(itemsCounterForPreloader++)
// console.log(itemsCounterForPreloader)
        input.current.addEventListener('change', setNewDate)

        return () => input.current.removeEventListener('change', setNewDate)
    }, [])

    useEffect(() => {
        if (!todayData.date) return

        if (todayData.date && !imageData.date) {
            if (readFromLocalStorage(C.LOCAL_STORAGE_KEY)) {
                if (dataFromLocalStorage
                    && Object.keys(dataFromLocalStorage).length
                    && dataFromLocalStorage.imageData.date
                ) {
                    changeImage(dataFromLocalStorage.imageData)
                } else {
                    changeImage(todayData)
                }
            } else {
                changeImage(todayData)
            }
        }

        if (imageData.date === todayData.date) changeImage({ ...todayData, date: C.TODAY })
        
        writeToLocalStorage(C.LOCAL_STORAGE_KEY, JSON.stringify({ ...mainImage }))
    }, [mainImage])

    const ajaxQuery = async (selectedDate = '') => {
        try {
            const nasaQuery = await fetch(queryString(selectedDate))
            if (!nasaQuery.ok) throw new Error('Some internal error')

            const nasaParse = await nasaQuery.json()

            const date = nasaParse.date
            const mediaType = nasaParse.media_type
            const url = mediaType === C.MEDIA_TYPE_IMAGE ? nasaParse.hdurl : nasaParse.url
            const explanation = nasaParse.explanation
            const title = nasaParse.title
            const targetObj = { date, url, explanation, title, mediaType }

            if (selectedDate) {
                changeImage(targetObj)
            } else {
                setTodayData(targetObj)
            }
        } catch (error) {
            console.log('Error: ', error)

            const targetObj = {
                date: selectedDate,
                url: null,
                explanation: null,
                title: null,
                mediaType: null
            }

            if (selectedDate) {
                changeImage(targetObj)
            } else {
                setTodayData(targetObj)
            }
        }
    }

    const setNewDate = (e) => {
        const value = e.target.value
        ajaxQuery(value)
    }

    const contextObj = {
        className: 'main-image__image',
        url: checkTodayDate(imageData.date) ? todayData.url : imageData.url,
        // itemCounter used for get data from state and set to ModalWindow
        itemCounter: C.MAIN_IMAGE_ATTRIBUTE
    }

    return (
        <section className='main-image'>
            <MainImageDataContext.Provider value={contextObj}>
                <RenderingContentDependingOnTheType
                    mediaType={checkTodayDate(imageData.date) ? todayData.mediaType : imageData.mediaType}
                />
            </MainImageDataContext.Provider>

            <h1 className='main-image__title'>NASA. APOD: Astronomy Picture of the Day</h1>

            <input
                className='main-image__input'
                type="date"
                max={todayData.date}
                value={checkTodayDate(imageData.date) ? todayData.date : (imageData.date || '')}
                ref={input}
                onChange={() => changeImage({ ...imageData, date: input.current.value })}
            />
        </section>
    )
}

export default MainImage
