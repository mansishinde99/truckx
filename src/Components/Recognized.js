import React from 'react';
import "../Styles/Companies.css"
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const images = [
//     "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-2.png",
//       "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-4.png",
//       "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-3.png",
//       "https://truckx.com/wp-content/uploads/2019/08/we-covered-by-copy-4.png",
//   ];

const Recognized = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="white-bg">
        <h1 className='blue-head'>Recognized By</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='recognized-img' src={image}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Recognized;
