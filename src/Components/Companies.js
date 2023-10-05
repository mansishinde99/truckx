import React from "react";
import "../Styles/Companies.css"

const images = [
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-Silicon-Roadway.png",
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-Eagle.png",
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-BRAR.png",
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-BESTBUY.png",
  "https://truckx.com/wp-content/uploads/2019/08/TruckX-Customer-NE.png",
];

const images2 = [
    "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-2.png",
    "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-4.png",
    "https://truckx.com/wp-content/uploads/2019/08/we-caovered-by-copy-3.png",
    "https://truckx.com/wp-content/uploads/2019/08/we-covered-by-copy-4.png",
]

const Companies = () => {
  return (
    <>
    <div className="white-bg">
      <h1 className="blue-head">Companies Love TruckX</h1>
      <div className="companies-images">
        {images.map((images) => {
          return <img src={images}/>;
        })}
      </div>
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

