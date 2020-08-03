import React from 'react'
import PropTypes from 'prop-types'

const RenderDate = ({ date }) => {
    return <div>{date}</div>
}

RenderDate.propTypes = {
    date: PropTypes.string.isRequired
}

export default RenderDate
