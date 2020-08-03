import React, { useEffect } from 'react'
import InfiniteScroll from '@alexcambose/react-infinite-scroll';
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType';
import { LoaderActive, LoaderEmpty } from './../loaders'
import queryString from '@/app/helpers/queryString'
import getSpecialDateFormat from '@/app/helpers/getSpecialDateFormat'
import C from '@/app/constants/constants'

const ImageCatalog = ({
    imagesArray,
    loadImages,
    dataInterval,
    changeDataInterval,
    itemsCounterForOneIteration,
    countItemsForOneIteration,
    loader,
    changeLoader,
}) => {
    let startDate, endDate

    useEffect(() => {
        // if we have less them 24 items
        if (itemsCounterForOneIteration < C.ITEMS_ON_PAGE && itemsCounterForOneIteration !== 0) {
            startDate = new Date(dataInterval.startDateValue)
            endDate = new Date(dataInterval.startDateValue)

            endDate.setDate(endDate.getDate() - 1)
            startDate.setDate(startDate.getDate() - (C.ITEMS_ON_PAGE - itemsCounterForOneIteration))

            ajaxQuery(getSpecialDateFormat(startDate), getSpecialDateFormat(endDate), itemsCounterForOneIteration)

            changeDataInterval(startDate, endDate)
        }
    }, [itemsCounterForOneIteration])

    useEffect(() => {
        changeLoader(false)
    }, [imagesArray])

    const ajaxQuery = async (startDate, endDate, itemsCounter = 0) => {
        try {
            const nasaQuery = await fetch(queryString(null, startDate, endDate))
            const nasaParse = await nasaQuery.json()

            loadImages([...imagesArray, ...nasaParse.reverse()])
            countItemsForOneIteration(nasaParse.length + itemsCounter)
        } catch (error) {
            console.log(error)
        }
    }

    const checkScrollScreen = () => {
        changeLoader(true)

        if (dataInterval.startDateValue && dataInterval.endDateValue) {
            startDate = new Date(dataInterval.startDateValue)
            endDate = new Date(dataInterval.startDateValue)

            endDate.setDate(endDate.getDate() - 1)
            startDate.setDate(startDate.getDate() - C.ITEMS_ON_PAGE)
        } else {
            startDate = new Date()
            startDate.setDate(startDate.getDate() - C.ITEMS_ON_PAGE)

            endDate = new Date()
            endDate.setDate(endDate.getDate() - 1)
        }

        ajaxQuery(getSpecialDateFormat(startDate), getSpecialDateFormat(endDate))

        changeDataInterval(startDate, endDate)
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
