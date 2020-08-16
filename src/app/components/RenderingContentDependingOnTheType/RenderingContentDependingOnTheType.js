import React from 'react'
import PropTypes from 'prop-types'
import ImageBlockContainer from '../ImageBlock/ImageBlockContainer'
import VideoBlock from './../VideoBlock/VideoBlock'
import C from '@/app/constants/constants'

const RenderingContentDependingOnTheType = ({ mediaType }) => {
    switch (mediaType) {
        case C.MEDIA_TYPE_IMAGE:
            return <ImageBlockContainer />

        case C.MEDIA_TYPE_VIDEO:
            return <VideoBlock />

        default:
            return <strong>We have nothing on this date</strong>
    }
}

RenderingContentDependingOnTheType.propTypes = {
    mediaType: PropTypes.string
}

export default RenderingContentDependingOnTheType
