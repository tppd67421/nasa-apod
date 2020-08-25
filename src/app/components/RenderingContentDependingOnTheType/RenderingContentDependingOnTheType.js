import React from 'react'
import PropTypes from 'prop-types'
import ImageBlockContainer from '../ImageBlock/ImageBlockContainer'
import VideoBlockContainer from './../VideoBlock/VideoBlockContainer'
import ErrorComponent from './../ErrorComponent/ErrorComponent'
import C from '@/app/constants/appConstants'

const RenderingContentDependingOnTheType = ({ mediaType }) => {
    switch (mediaType) {
        case C.MEDIA_TYPE_IMAGE:
            return <ImageBlockContainer />

        case C.MEDIA_TYPE_VIDEO:
            return <VideoBlockContainer />

        default:
            return <ErrorComponent />
    }
}

RenderingContentDependingOnTheType.propTypes = {
    mediaType: PropTypes.string
}

export default RenderingContentDependingOnTheType
