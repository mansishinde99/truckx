import React from "react";
import "../Styles/Companies.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Companies = ({ companies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="white-bg">
        <h1 className="blue-head">Companies Love TruckX</h1>
        <Slider {...settings}>
          {/* ... is a spread operator it is used to create a shallow copy of an array or combine array */}
          {companies.map((company, index) => (
            <div key={index}>
              <img className="companies-images" src={company} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="tune">
        <h1 className="blue-head">In Tune With Dave Nemo</h1>
        <p className="tune-text"> Road Dog show at GATS 2017</p>
        <div className="tune-frame">
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344219180&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </div>
    </>
  );
};

export default Companies;
