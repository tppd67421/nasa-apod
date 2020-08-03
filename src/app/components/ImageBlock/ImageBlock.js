import React from 'react'
import PropTypes from 'prop-types'
import RenderDate from './../RenderDate/RenderDate'

const ImageBlock = ({ url, date, style }) => {
    return (
        <>
            <img src={url} style={style} />
            <RenderDate date={date} />
        </>
    )
}

ImageBlock.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    style: PropTypes.object
}

export default ImageBlock
