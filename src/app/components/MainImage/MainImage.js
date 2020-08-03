import React, { useEffect, useRef } from 'react'
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType';
import getSpecialDateFormat from '@/app/helpers/getSpecialDateFormat'
import { writeToLocalStorage, readFromLocalStorage } from '@/app/helpers/workWithLocalStorage'
import queryString from '@/app/helpers/queryString'
import C from '@/app/constants'

const MainImage = ({ mainImage, changeImage }) => {
    const dataFromLocalStorage = JSON.parse(readFromLocalStorage(C.LOCAL_STORAGE_KEY))

    const input = useRef();

    useEffect(() => {
        if (!dataFromLocalStorage || !dataFromLocalStorage.date || !Object.keys(dataFromLocalStorage).length) {
            ajaxQuery()
        } else {
            changeImage(dataFromLocalStorage)
        }

        input.current.addEventListener('change', setNewDate)

        return () => input.current.removeEventListener('change', setNewDate)
    }, [])

    useEffect(() => {
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

            changeImage(targetObj)
        } catch (error) {
            console.log('Error: ', error)
            changeImage({date: selectedDate, url: null, mediaType: null})
        }
    }

    const setNewDate = (e) => {
        const value = e.target.value
        ajaxQuery(value)
    }

    return (
        <>
            <RenderingContentDependingOnTheType
                url={mainImage.url}
                date={mainImage.date}
                mediaType={mainImage.mediaType}
            />

            <hr />

            <input
                type="date"
                max={getSpecialDateFormat()}
                value={mainImage.date || ''}
                ref={input}
                onChange={() => changeImage({ ...mainImage, date: input.current.value })}
            />

            <hr />
        </>
    )
}

export default MainImage
