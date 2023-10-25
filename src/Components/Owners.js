import React from 'react';
import "../Styles/Owners.css"
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Owners = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="image-slider">
      <h1>Trusted by Owner Operators to Large Fleets</h1>
      <Slider {...settings}>
        {slides.map((slide, i) => (
            <div className="slide-content" key={i}>
              <p className="text">"{slide.text}"</p>
              <img className='ownerimg' src={slide.img}/>
              <p className="name">{slide.name}</p>
              <p className="bs">{slide.bs}</p>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default Owners;
