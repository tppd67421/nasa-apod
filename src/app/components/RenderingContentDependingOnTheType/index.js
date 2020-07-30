import React from 'react'
import PropTypes from 'prop-types'
import ImageBlock from './../ImageBlock'
import VideoBlock from './../VideoBlock'
import C from '@/app/constants'

const RenderingContentDependingOnTheType = ({ url, date, mediaType, style }) => {
    switch (mediaType) {
        case C.MEDIA_TYPE_IMAGE:
            return <ImageBlock style={style} url={url} date={date} />

        case C.MEDIA_TYPE_VIDEO:
            return <VideoBlock style={style} url={url} date={date} />

        default:
            return <strong>We have nothing on this date</strong>
    }
}

RenderingContentDependingOnTheType.propTypes = {
    url: PropTypes.string,
    date: PropTypes.string,
    mediaType: PropTypes.string,
    style: PropTypes.object
}

export default RenderingContentDependingOnTheType
