import React, { useState } from "react";
import "../Styles/Owners.css";


const Owners = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <h1>Trusted by Owner Operators to Large Fleets</h1>
      <div className="owners">
        <button onClick={prevSlide}><strong>&lt;</strong></button>
        <div className="slide">
          <p className="text">{slides[currentIndex].text}</p>
          <img src={slides[currentIndex].img} alt={`Slide ${currentIndex}`} />
          <p className="name">{slides[currentIndex].name}</p>
          <p className="bs">{slides[currentIndex].bs}</p>
        </div>
        <button onClick={nextSlide}><strong>&gt;</strong></button>
      </div>
    </div>
  );
};

// const OWNERS = (props) =>{
//     return(
//     <div className="cont">
//         {/* <p className="text">{props.ownerr.text}</p> */}
//         <img src={props.ownerr.img}/>
//         {/* <p className="name">{props.ownerr.name}</p>
//         <p className="bs">{props.ownerr.bs}</p> */}
//     </div>
//     )
// }

export default Owners;
