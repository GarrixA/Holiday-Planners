import React, { useState } from 'react';
import Modal from './Modal';
import Hamburger from 'hamburger-react';


const RenderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}> < Hamburger/> </button>
      
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default RenderModal;
