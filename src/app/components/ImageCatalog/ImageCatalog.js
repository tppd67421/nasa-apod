import React, { useEffect } from 'react'
import InfiniteScroll from '@alexcambose/react-infinite-scroll';
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType/RenderingContentDependingOnTheType';
import { LoaderActive, LoaderEmpty } from './../loaders/loaders'
import queryString from '@/app/helpers/queryString'
import convertDateObjectToString from '@/app/helpers/convertDateObjectToString'
import { MainImageDataContext } from '@/app/helpers/context'
import C from '@/app/constants/appConstants'
import './ImageCatalog.scss'

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
        <section className='image-catalog'>
            <InfiniteScroll
                hasMore={true}
                loadMore={checkScrollScreen}
            >
                <div className='image-catalog__wrap'>
                    {imagesArray.map((item, counter) => (
                        <MainImageDataContext.Provider
                            key={item.date}
                            value={{
                                className: 'image-catalog__item',
                                url: item.url,
                                // itemCounter used for get data from state and set to ModalWindow
                                itemCounter: counter
                            }}>
                            <RenderingContentDependingOnTheType
                                mediaType={item.media_type}
                            />
                        </MainImageDataContext.Provider>
                    ))}
                </div>
                {loader ? <LoaderActive /> : <LoaderEmpty />}
            </InfiniteScroll>
        </section>
    )
}

export default ImageCatalog
