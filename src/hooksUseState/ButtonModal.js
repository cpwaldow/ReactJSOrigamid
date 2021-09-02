import React from 'react'

function ButtonModal({ modal, setModal }) {
  if(modal) {
    return null
  }else {
    return (
      <button onClick={() => setModal(true)}>
        Abrir
      </button>
    )
  }
}

export default ButtonModal
