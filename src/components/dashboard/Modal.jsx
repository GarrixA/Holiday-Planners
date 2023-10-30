import React, { useEffect, useState } from 'react';
import './Modal.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [destination, setDestination] = useState("");
  const [Duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [GroupSize, setGroupsize] = useState("");
  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files, "file");
    setImage(e.target.files[0]);
  };
  const formData = new FormData();
  formData.append("backdropImage", image);
  formData.append("Duration", Duration);
  formData.append("destination", destination);
  formData.append("GroupSize", GroupSize);
  formData.append("Price", price);
  const handleForm = (e) => {
    //console.log("Hii");
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setTimeout(() => {
          closeModal();
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  


  return (
    <div className="modal-container" onClick={(e) => { 
        if (e.target.className === 'modal-container') 
        closeModal() }}
        >

      <div className="modal">
        <form action='/'
          method='get'
        >
          <div className="form-group">
            <label htmlFor="Image">Tour Image</label>
            <input name="Image" type='file' 
            onChange={(e) => handleImage(e)}
            />
            </div>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input name="destination" 
            value={destination} 
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            />
            </div>

          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input name="Duration" 
            value={Duration} 
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            />

          </div>
          <div className="form-group">
            <label htmlFor="Duration">Group size</label>
            <input name="Duration" 
            value={GroupSize} 
            onChange={(e) => {
              setGroupsize(e.target.value);
            }}
            />

          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input name="price" 
            value={price} 
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            />

          </div>
          

          
          <button type="submit" className="btn" onClick={handleForm}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;