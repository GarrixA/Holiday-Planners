import React from 'react';
import './modal.css';


const Modal = ({ isOpen, onClose }) => {
  const modalStyle = {
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content" style={modalStyle}>
        <span className="close" onClick={onClose}>&times;</span>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
