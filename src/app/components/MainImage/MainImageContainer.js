import React from 'react'
import { connect } from 'react-redux'
import { setTodayData, setMainImage } from '@/app/store/actions'
import MainImage from './MainImage'

const MainImageContainer = (props) => {
    return <MainImage {...props} />
}

const mapStateToProps = (state) =>({
    mainImage: state.mainImage,
    imageData: state.mainImage.imageData,
    todayData: state.mainImage.todayData
})

const mapDispatchToProps = (dispatch) => ({
    setTodayData(data) {
        dispatch(setTodayData(data))
    },
    changeImage(data) {
        dispatch(setMainImage(data))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainImageContainer)
