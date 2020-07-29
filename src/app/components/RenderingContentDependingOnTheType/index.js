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
            return <strong>Unidentified media type: {mediaType}</strong>
    }
}

RenderingContentDependingOnTheType.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    mediaType: PropTypes.string.isRequired,
    style: PropTypes.object
}

export default RenderingContentDependingOnTheType
