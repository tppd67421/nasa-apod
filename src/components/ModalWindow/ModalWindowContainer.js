import { observer } from 'mobx-react-lite'
import modalWindowStore from '@/store/ModalWindowStore'
import ModalWindow from './ModalWindow'

const ModalWindowContainer = () => {
  return (
    <ModalWindow
      modalWindowShowed={modalWindowStore.modalWindowState}
      modalWindowTitle={modalWindowStore.modalWindowTitle}
      modalWindowMainData={modalWindowStore.modalWindowMainData}
      modalWindowDate={modalWindowStore.modalWindowDate}
      modalWindowExplanation={modalWindowStore.modalWindowExplanation}
      modalWindowType={modalWindowStore.modalWindowType}
      setStateForModalWindow={modalWindowStore.setStateForModalWindow}
    />
  )
}

export default observer(ModalWindowContainer)
