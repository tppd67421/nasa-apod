import React, { useEffect } from 'react'
import InfiniteScroll from '@alexcambose/react-infinite-scroll';
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType/RenderingContentDependingOnTheType';
import { LoaderActive, LoaderEmpty } from './../loaders/loaders'
import queryString from '@/app/helpers/queryString'
import convertDateObjectToString from '@/app/helpers/convertDateObjectToString'
import C from '@/app/constants/constants'

const ImageCatalog = ({
    imagesArray,
    loadImages,
    imagesArrayForOneIteration,
    loadImagesToOneIteration,
    dataInterval,
    changeDataInterval,
    itemsCounterForOneIteration,
    countItemsForOneIteration,
    loader,
    changeLoader,
    todayDate
}) => {
    let startDate, endDate

    useEffect(() => {
        // if we have less them 24 items
        if (itemsCounterForOneIteration < C.ITEMS_ON_PAGE && itemsCounterForOneIteration !== 0) {
            startDate = new Date(dataInterval.startDateValue)
            endDate = new Date(dataInterval.startDateValue)

            endDate.setDate(endDate.getDate() - 1)
            startDate.setDate(startDate.getDate() - (C.ITEMS_ON_PAGE - itemsCounterForOneIteration))

            ajaxQuery(convertDateObjectToString(startDate), convertDateObjectToString(endDate), itemsCounterForOneIteration)

            changeDataInterval(startDate, endDate)
        }
    }, [itemsCounterForOneIteration])

    useEffect(() => {
        if (!imagesArray.length) return
        changeLoader(false)
    }, [imagesArray])

    useEffect(() => {
        // fix bug. sometimes load second iteration instead of first
        loadImages([...imagesArray, ...imagesArrayForOneIteration])
    }, [imagesArrayForOneIteration])

    useEffect(() => {
        if (!todayDate) return

        // first load images
        startDate = new Date()
        startDate.setDate(startDate.getDate() - C.ITEMS_ON_PAGE)
        endDate = new Date(todayDate)
        endDate.setDate(endDate.getDate() - 1)

        ajaxQuery(convertDateObjectToString(startDate), convertDateObjectToString(endDate))
        changeDataInterval(startDate, endDate)
    }, [todayDate])

    const ajaxQuery = async (startDate, endDate, itemsCounter = 0) => {
        try {
            const nasaQuery = await fetch(queryString(null, startDate, endDate))
            const nasaParse = await nasaQuery.json()

            loadImagesToOneIteration([...nasaParse.reverse()])
            countItemsForOneIteration(nasaParse.length + itemsCounter)
        } catch (error) {
            console.log(error)
        }
    }

    const checkScrollScreen = () => {
        changeLoader(true)

        if (dataInterval.startDateValue && dataInterval.endDateValue) {
            // next load images
            startDate = new Date(dataInterval.startDateValue)
            endDate = new Date(dataInterval.startDateValue)
            endDate.setDate(endDate.getDate() - 1)
            startDate.setDate(startDate.getDate() - C.ITEMS_ON_PAGE)

            ajaxQuery(convertDateObjectToString(startDate), convertDateObjectToString(endDate))
            changeDataInterval(startDate, endDate)
        }
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
                {imagesArray.map(item => (
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
                {loader ? <LoaderActive /> : <LoaderEmpty />}
            </InfiniteScroll>
        </div>
    )
}

export default ImageCatalog
