import React from 'react'
import ReactDOM from 'react-dom'
export interface ModalProps {
    
}
 
const Modal: React.FunctionComponent<ModalProps> = () => {
    return ReactDOM.createPortal(
        <div>
            ModaleK
        </div>,
        document.querySelector('#modal')
    )
}
 
export default Modal;