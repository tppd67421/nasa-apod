import React, { useEffect, useRef } from 'react'
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType/RenderingContentDependingOnTheType';
import { writeToLocalStorage, readFromLocalStorage } from '@/app/helpers/workWithLocalStorage'
import queryString from '@/app/helpers/queryString'
import C from '@/app/constants/constants'

const MainImage = ({ mainImage, imageData, changeImage, todayData, setTodayData }) => {
    const dataFromLocalStorage = JSON.parse(readFromLocalStorage(C.LOCAL_STORAGE_KEY))

    const input = useRef();

    useEffect(() => {
        ajaxQuery()

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
        
        if (imageData.date === todayData.date) changeImage({ ...imageData, date: C.TODAY })
        writeToLocalStorage(C.LOCAL_STORAGE_KEY, JSON.stringify({ ...mainImage }))
    }, [mainImage])

    const ajaxQuery = async (selectedDate = '') => {
        try {
            const nasaQuery = await fetch(queryString(selectedDate))
            if (!nasaQuery.ok) throw new Error('Some internal error')

            const nasaParse = await nasaQuery.json()

            const date = nasaParse.date
            const url = nasaParse.url
            const mediaType = nasaParse.media_type
            const targetObj = { date, url, mediaType }
            
            if (selectedDate) {
                changeImage(targetObj)
            } else {
                setTodayData(targetObj)
            }
        } catch (error) {
            console.log('Error: ', error)

            const targetObj = { date: selectedDate, url: null, mediaType: null }

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

    const checkTodayDate = () => {
        if (imageData.date === C.TODAY) return true
        else return false
    }

    return (
        <>
            <RenderingContentDependingOnTheType
                url={checkTodayDate() ? todayData.url : imageData.url}
                date={checkTodayDate() ? todayData.date : imageData.date}
                mediaType={checkTodayDate() ? todayData.mediaType : imageData.mediaType}
            />

            <hr />

            <input
                type="date"
                max={todayData.date}
                value={checkTodayDate() ? todayData.date : (imageData.date || '')}
                ref={input}
                onChange={() => changeImage({ ...imageData, date: input.current.value })}
            />

            <hr />
        </>
    )
}

export default MainImage