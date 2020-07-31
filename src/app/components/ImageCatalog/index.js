import React, { useState, useEffect } from 'react'
import InfiniteScroll from '@alexcambose/react-infinite-scroll';
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType';
import { LoaderActive, LoaderEmpty } from './../loaders'
import queryString from '@/app/helpers/queryString'
import getSpecialDateFormat from '@/app/helpers/getSpecialDateFormat'
import C from '@/app/constants'

const ImageCatalog = () => {
    const [stateItems, setStateItems] = useState([])
    const [stateItemsCounter, setItemsCounter] = useState(0)
    const [stateLoader, setStateLoader] = useState(true)
    const [stateDate, setStateDate] = useState({
        startDateValue: null,
        endDateValue: null
    })

    let startDate, endDate

    useEffect(() => {
        // if we have less them 24 items
        if (stateItemsCounter < C.ITEMS_ON_PAGE && stateItemsCounter !== 0) {
            startDate = new Date(stateDate.startDateValue)
            endDate = new Date(stateDate.startDateValue)

            endDate.setDate(endDate.getDate() - 1)
            startDate.setDate(startDate.getDate() - (C.ITEMS_ON_PAGE - stateItemsCounter))

            ajaxQuery(getSpecialDateFormat(startDate), getSpecialDateFormat(endDate), stateItemsCounter)

            setStateDate({
                startDateValue: startDate,
                endDateValue: endDate
            })
        }
    }, [stateItemsCounter])

    useEffect(() => {
        setStateLoader(false)
    }, [stateItems])

    const ajaxQuery = async (startDate, endDate, itemsCounter = 0) => {
        try {
            const nasaQuery = await fetch(queryString(null, startDate, endDate))
            const nasaParse = await nasaQuery.json()

            setStateItems((prevState) =>
                ([...prevState, ...nasaParse.reverse()])
            )
            setItemsCounter(nasaParse.length + itemsCounter)
        } catch (error) {
            console.log(error)
        }
    }

    const checkScrollScreen = () => {
        setStateLoader(true)

        if (stateDate.startDateValue && stateDate.endDateValue) {
            startDate = new Date(stateDate.startDateValue)
            endDate = new Date(stateDate.startDateValue)

            endDate.setDate(endDate.getDate() - 1)
            startDate.setDate(startDate.getDate() - C.ITEMS_ON_PAGE)
        } else {
            startDate = new Date()
            startDate.setDate(startDate.getDate() - C.ITEMS_ON_PAGE)

            endDate = new Date()
            endDate.setDate(endDate.getDate() - 1)
        }

        ajaxQuery(getSpecialDateFormat(startDate), getSpecialDateFormat(endDate))

        setStateDate({
            startDateValue: startDate,
            endDateValue: endDate
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
                        key={item.date}
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
                {stateLoader ? <LoaderActive /> : <LoaderEmpty />}
            </InfiniteScroll>
        </div>
    )
}

export default ImageCatalog
