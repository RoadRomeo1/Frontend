import { useState } from "react"
import "./style/modal.css"

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="main-container">
      {isModalOpen ? (
        <>
          <div className="backdrop" onClick={() => setIsModalOpen(false)}></div>
          <div className="container">
            <span
              className="close"
              role="button"
              tabIndex={0}
              onClick={() => {
                setIsModalOpen(false)
              }}
            >
              X
            </span>
            <h1>Modal</h1>
            <span className="modal">This is a modal component.</span>
          </div>
        </>
      ) : (
        <button
          type="button"
          className="open-modal"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Open Modal
        </button>
      )}
    </div>
  )
}
export default Modal
