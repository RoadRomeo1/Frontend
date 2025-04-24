import { useState } from "react"
import { MainContainer, ModalContainer, CloseButton, Backdrop, ModalText, OpenButton } from "./style/Modal.style"

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <MainContainer>
      {isModalOpen ? (
        <>
          <Backdrop onClick={() => setIsModalOpen(false)} />
          <ModalContainer>
            <CloseButton
              role="button"
              tabIndex={0}
              onClick={() => {
                setIsModalOpen(false)
              }}
            >
              X
            </CloseButton>
            <h1>Modal</h1>
            <ModalText>This is a modal component.</ModalText>
          </ModalContainer>
        </>
      ) : (
        <OpenButton
          type="button"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          Open Modal
        </OpenButton>
      )}
    </MainContainer>
  )
}
export default Modal
