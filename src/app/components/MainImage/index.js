import React, { useState, useEffect, useRef } from 'react'
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType';
import getSpecialDateFormat from '@/app/helpers/getSpecialDateFormat'
import { writeToLocalStorage, readFromLocalStorage } from '@/app/helpers/workWithLocalStorage'
import queryString from '@/app/helpers/queryString'
import C from '@/app/constants'

const MainImage = () => {
    const dataFromLocalStorage = JSON.parse(readFromLocalStorage(C.LOCAL_STORAGE_KEY))

    const [state, setState] = useState(dataFromLocalStorage || {
        date: getSpecialDateFormat(),
        url: null,
        mediaType: C.MEDIA_TYPE_IMAGE
    })
    const input = useRef();

    useEffect(() => {
        if (dataFromLocalStorage) {
            setState(dataFromLocalStorage)
        } else {
            ajaxQuery()
        }
        input.current.addEventListener('change', setNewDate)

        return () => input.current.removeEventListener('change', setNewDate)
    }, [])

    useEffect(() => {
        writeToLocalStorage(C.LOCAL_STORAGE_KEY, JSON.stringify({
            ...state
        }))
    }, [state])

    const ajaxQuery = async (selectedDate = '') => {
        try {
            const nasaQuery = await fetch(queryString(selectedDate))
            if (!nasaQuery.ok) throw new Error('Some internal error')

            const nasaParse = await nasaQuery.json()

            const date = nasaParse.date
            const url = nasaParse.url
            const mediaType = nasaParse.media_type
            const targetObj = { date, url, mediaType }

            setState(targetObj)
        } catch (error) {
            console.log(error)
            setState({...state, url: null, date: selectedDate, mediaType: null})
        }
    }

    const setNewDate = (e) => {
        const value = e.target.value
        ajaxQuery(value)
    }

    return (
        <>
            <RenderingContentDependingOnTheType
                url={state.url}
                date={state.date}
                mediaType={state.mediaType}
            />

            <hr />

            <input
                type="date"
                max={getSpecialDateFormat()}
                value={state.date}
                ref={input}
                onChange={(e) => setState({ ...state, date: e.target.value })}
            />

            <hr />
        </>
    )
}

export default MainImage
