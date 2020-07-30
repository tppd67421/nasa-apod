import React, { useState } from 'react'
import InfiniteScroll from '@alexcambose/react-infinite-scroll';
import RenderingContentDependingOnTheType from './../RenderingContentDependingOnTheType';
import queryString from '@/app/helpers/queryString'
import getSpecialDateFormat from '@/app/helpers/getSpecialDateFormat'
import C from '@/app/constants'

const ImageCatalog = () => {
    const [stateItems, setStateItems] = useState([])

    const [stateDate, setStateDate] = useState({
        startDateValue: null,
        endDateValue: null
    })

    const ajaxQuery = async (startDate, endDate) => {
        try {
            const nasaQuery = await fetch(queryString(null, startDate, endDate))
            const nasaParse = await nasaQuery.json()

            setStateItems([...stateItems, ...nasaParse.reverse()])

            return nasaParse.length
        } catch (error) {
            console.log(error)
        }
    }

    const checkScrollScreen = () => {
        let startDate, endDate

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
            </InfiniteScroll>
        </div>
    )
}

export default ImageCatalog
