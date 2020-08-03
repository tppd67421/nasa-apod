import React from 'react'
import { connect } from 'react-redux'
import { setMainImage } from '@/app/store/actions'
import MainImage from './MainImage'

const MainImageContainer = (props) => {
    return <MainImage {...props} />
}

const mapStateToProps = (state) =>({
    mainImage: state.mainImage
})

const mapDispatchToProps = (dispatch) => ({
    changeImage(data) {
        dispatch(setMainImage(data))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainImageContainer)
