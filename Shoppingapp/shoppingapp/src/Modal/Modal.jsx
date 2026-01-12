import {createPortal} from 'react-dom';

function Modal({children,handleClose}) {

    return createPortal(
        <div className='fixed bg-black/50 inset-0 flex justify-center items-center z-50' onClick={handleClose}>
        <div onClick={(e)=>(e.stopPropagation())}>{children}</div>
        </div>, document.getElementById('portal')
    )
}

export default Modal;