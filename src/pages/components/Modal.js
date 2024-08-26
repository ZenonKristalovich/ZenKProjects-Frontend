import React from 'react';
import '../css/modal.css';

const Modal = ({ show, handleClose, handleConfirm, message }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className='modal-content'>
                <p>{message}</p>
                <button className='yes-button' onClick={handleConfirm}>Yes</button>
                <button className='no-button' onClick={handleClose}>No</button>
            </div>
        </div>
    );
};

export default Modal;
