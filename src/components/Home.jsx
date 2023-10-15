import slides from "../slide/SlideShow";
import About from "./About";
import Modal from './/Modal';
import { useState } from 'react';
import './styles/modal.css'

function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="main">
      <div className="main-content">
        {
          slides.map(slide =>(
            <div key={slide.id} className="key">
                <div className="di">
                <h2>{slide.tittle2}</h2>
                <h2 style={{backgroundColor: "red"}}>{slide.paragraph2}</h2>
                <p>{slide.description2}</p>
              </div>
            </div>
          ))
        }
        
        <div className="mod">
            <button className='open' onClick={() => setOpenModal(true)}>open</button>
            {openModal && <Modal closeModal={setOpenModal}/> }
        </div>

        <div className="button">
          <button className="prev">
            <span>P</span>
            <span>r</span>
            <span>e</span>
            <span>v</span>
          </button>
          <button className="next">
            <span>N</span>
            <span>e</span>
            <span>x</span>
            <span>t</span>
          </button>
        </div>
      </div>
      <About/>
    </div>
  );
}

export default Home;


