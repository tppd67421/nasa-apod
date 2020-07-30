import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid';
import InfiniteScroll from '@alexcambose/react-infinite-scroll';
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType';
import queryString from '@/app/helpers/queryString'
import getSpecialDateFormat from '@/app/helpers/getSpecialDateFormat'
import C from '@/app/constants'

const ImageCatalog = () => {
    const [stateItems, setStateItems] = useState([])

    let endDate = new Date()
    endDate.setDate(endDate.getDate() - 1)
    let startDate = new Date()
    startDate.setDate(startDate.getDate() - C.ITEMS_ON_PAGE)
    const [stateDate, setStateDate] = useState({
        startDateValue: startDate,
        endDateValue: endDate,
        startDateString: getSpecialDateFormat(startDate),
        endDateString: getSpecialDateFormat(endDate)
    })

    // useEffect(() => {
    // ajaxQuery(getSpecialDateFormat(startDate), getSpecialDateFormat(endDate))
    // }, [])

    const ajaxQuery = async (startDate, endDate) => {
        try {
            console.log(stateItems)
            const nasaQuery = await fetch(queryString(null, startDate, endDate))
            const nasaParse = await nasaQuery.json()
            // debugger
            setStateItems([...stateItems, ...nasaParse.reverse()])
            console.log([...stateItems, ...nasaParse.reverse()])
        } catch (error) {
            console.log(error)
        }
    }

    const checkScrollScreen = () => {
        console.log('startDate: ', startDate, 'endDate: ', endDate)
        startDate = new Date(stateDate.startDateValue)
        endDate = new Date(stateDate.startDateValue)
        endDate.setDate(endDate.getDate() - 1)
        startDate.setDate(startDate.getDate() - C.ITEMS_ON_PAGE)
        console.log('startDate: ', startDate, 'endDate: ', endDate)
        ajaxQuery(getSpecialDateFormat(startDate), getSpecialDateFormat(endDate))
        setStateDate({
            startDateValue: startDate,
            endDateValue: endDate,
            startDateString: getSpecialDateFormat(startDate),
            endDateString: getSpecialDateFormat(endDate)
        })
    };

    return (
        <div>
            <InfiniteScroll
                hasMore={true}
                loadMore={checkScrollScreen}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                {stateItems.map(item => (
                    <div
                        style={{ margin: '30px' }}
                        key={v4()}
                    >
                        <RenderingContentDependingOnTheType
                            style={{
                                width: '300px',
                                height: '300px',
                                objectFit: 'contain'
                            }}
                            url={item.url}
                            date={item.date}
                            mediaType={item.media_type}
                        />
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default ImageCatalog
