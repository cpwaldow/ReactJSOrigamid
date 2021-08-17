import React from 'react'

const Modal = ({modal, setModal}) => {
  if (modal) {
    return (
      <>
        Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
      </>
    )
  } else {
    return null;
  }
}

export default Modal
