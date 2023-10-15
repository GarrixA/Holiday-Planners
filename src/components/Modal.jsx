import React from "react";
import "./styles/modal.css";

function Modal({ closeModal }) {
  return (
   <div className="modal-bg">
    <div className="modal-cont">
        <button className="right-btn" onClick={() => closeModal(false)}> X </button>
        <div className="tittl">
            <h1>are you </h1>
        </div>
        <div className="body">
            <p>,sdnlsdnfklsndklnfklsndk</p>
        </div>
        <div className="foot">
            <button>cancel</button>
            <button>Continue</button>
        </div>
    </div>
   </div>
  );
}

export default Modal;