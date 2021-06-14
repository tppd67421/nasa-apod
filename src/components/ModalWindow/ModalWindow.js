import { Modal } from 'react-bootstrap'
import C from '@/constants/appConstants'
import convertStringDateToObject from '@/helpers/convertStringDateToObject'
import removeParentClass from '@/helpers/removeParentClass'
import './ModalWindow.scss'

const ImgCreator = ({ imgLink }) => (
  <a href={imgLink} target="_blank" className={C.CLASS_FOR_LOADED_ELEMENTS}>
    <img
      className="modal-window__main-data"
      src={imgLink}
      onLoad={(e) => removeParentClass(e.target)}
    />
  </a>
)

const IframeCreator = ({ iframeLink }) => (
  <div className={`modal-window__iframe-wrap ${C.CLASS_FOR_LOADED_ELEMENTS}`}>
    <iframe
      className="modal-window__main-data modal-window__main-data_video"
      src={iframeLink}
      onLoad={(e) => removeParentClass(e.target)}
    />
  </div>
)

const ModalWindow = ({
  modalWindowShowed,
  setStateForModalWindow,
  modalWindowTitle,
  modalWindowMainData,
  modalWindowDate,
  modalWindowExplanation,
  modalWindowType,
}) => {
  const dateObject = modalWindowDate
    ? convertStringDateToObject(modalWindowDate)
    : { day: '', month: '', year: '' }

  return (
    <Modal
      dialogClassName="modal-window"
      show={modalWindowShowed}
      onHide={() => setStateForModalWindow(false)}
      animation={false}
    >
      <Modal.Header className="modal-window__header" closeButton>
        <Modal.Title>
          <h2 className="modal-window__title">{modalWindowTitle}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-window__body">
        {modalWindowType === C.MODAL_WINDOW_VIDEO ? (
          <IframeCreator iframeLink={modalWindowMainData} />
        ) : (
          <ImgCreator imgLink={modalWindowMainData} />
        )}
        <p>{modalWindowExplanation}</p>
      </Modal.Body>
      <Modal.Footer>
        <p>{`${dateObject.day}.${dateObject.month}.${dateObject.year}`}</p>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalWindow
