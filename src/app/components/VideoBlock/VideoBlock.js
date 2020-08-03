import React from 'react'
import PropTypes from 'prop-types'
import RenderDate from './../RenderDate/RenderDate'

const VideoBlock = ({ url, date, style }) => {
    return (
        <>
            <iframe src={url} style={style} />
            <RenderDate date={date} />
        </>
    )
}

VideoBlock.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    style: PropTypes.object
}

export default VideoBlock
