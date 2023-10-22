import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(defaultValue || {
    destination: '',
    duration: '',
    group: '',
    price: '',
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
    if (formState.destination && formState.duration && formState.group && formState.price) {
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
            <label htmlFor="duration">Duration</label>
            <input name="duration" 
            value={formState.duration} 
            onChange={handleChange} 
            />

          </div>
          <div className="form-group">
            <label htmlFor="group">Group size</label>
            <input name="group" 
            value={formState.group} 
            onChange={handleChange} 
            />

          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input name="price" 
            value={formState.price} 
            onChange={handleChange} 
            />

          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
