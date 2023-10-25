import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue || {
    destination: '',
    Duration: '',
    GroupSize: '',
    Price: '',
  });

  const handlePage = (e) => {
    setFormState({
      ...formState,
      destination: e.target.value,
    });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (formState.destination && formState.Duration && formState.GroupSize && formState.Price) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
  };

  return (
    <div className="modal-container" onClick={(e) => { 
        if (e.target.className === 'modal-container') 
        closeModal() }}
        >

      <div className="modal">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input name="destination" 
            value={formState.destination} 
            onChange={handlePage} 
            />

          </div>
          <div className="form-group">
            <label htmlFor="Duration">Duration</label>
            <input name="Duration" 
            value={formState.Duration} 
            onChange={handleChange} 
            />

          </div>
          <div className="form-group">
            <label htmlFor="GroupSize">Group size</label>
            <input name="GroupSize" 
            value={formState.GroupSize} 
            onChange={handleChange} 
            />

          </div>
          <div className="form-group">
            <label htmlFor="Price">Price</label>
            <input name="Price" 
            value={formState.Price} 
            onChange={handleChange} 
            />

          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
