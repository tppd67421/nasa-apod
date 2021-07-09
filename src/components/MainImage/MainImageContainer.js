import { connect } from 'react-redux'
import { setTodayData, setMainImage } from '@/store/slices/mainImageSlice'
import MainImage from './MainImage'
import { observer } from 'mobx-react-lite'
import mainImageStore from '@/store/MainImageStore'
import { useEffect } from 'react'

const MainImageContainer = () => {
  // console.log(mainImageStore.todayData, mainImageStore.setMainImage)
  // useEffect(() => {
  //   mainImageStore.setTodayData({ date: 'qwe' })
  // }, [])
  return (
    <MainImage
      mainImage={mainImageStore}
      imageData={mainImageStore.imageData}
      todayData={mainImageStore.todayData}
      setTodayData={mainImageStore.setTodayData}
      changeImage={mainImageStore.setMainImage}
    />
  )
}

// const mapStateToProps = (state) => ({
//   mainImage: state.mainImage,
//   imageData: state.mainImage.imageData,
//   todayData: state.mainImage.todayData,
// })

// const mapDispatchToProps = (dispatch) => ({
//   setTodayData(data) {
//     dispatch(setTodayData(data))
//   },
//   changeImage(data) {
//     dispatch(setMainImage(data))
//   },
// })

export default observer(MainImageContainer)
