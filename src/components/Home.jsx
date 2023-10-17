import slides from "../slide/SlideShow";
import About from "./About";
import Contacts from "./Contacts";
import TourList from "./TourList";


function Home() {
  
  return (
    <div className="main">
      <div className="main-content">
        {
          slides.map(slide =>(
            <div key={slide.id} className="key">
                <div className="di">
                  {/* <img src={slide.image} */}
                  <h2>{slide.tittle2}</h2>
                  <h2 style={{backgroundColor: "#c29d59"}}>{slide.paragraph2}</h2>
                <p>{slide.description2}</p>
              </div>
            </div>
          ))
        }
        
        

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
      <Contacts/>
      <TourList/>
    </div>
  );
}

export default Home;


