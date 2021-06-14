import { connect } from 'react-redux'
import { setStateForModalWindow } from '@/store/slices/modalWindowSlice'
import ModalWindow from './ModalWindow'

const ModalWindowContainer = (props) => {
  return <ModalWindow {...props} />
}

const mapStateToProps = (state) => ({
  modalWindowShowed: state.modalWindow.modalWindowState,
  modalWindowTitle: state.modalWindow.modalWindowTitle,
  modalWindowMainData: state.modalWindow.modalWindowMainData,
  modalWindowDate: state.modalWindow.modalWindowDate,
  modalWindowExplanation: state.modalWindow.modalWindowExplanation,
  modalWindowType: state.modalWindow.modalWindowType,
})

const mapDispatchToProps = (dispatch) => ({
  setStateForModalWindow(state) {
    dispatch(setStateForModalWindow(state))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowContainer)
