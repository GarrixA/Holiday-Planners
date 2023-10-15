import slides from "../slide/SlideShow";

function Home() {
  return (
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
  );
}

export default Home;


