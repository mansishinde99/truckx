import React from "react";
import "../Styles/Tracker.css";
const TnSs = [
  {
    img: "https://truckx.com/wp-content/uploads/2022/11/smart_asset_tracker_truckx_2.png",
    text: "Smart Asset Tracker",
    subtext: "Any Asset: Dry Vans, Reefers, Containers, Chassis",
    button: "Learn More",
  },
  {
    img: "https://truckx.com/wp-content/uploads/2020/09/best-affordable-wired-gps-asset-tracking-for-trucks-from-Truckx-min.png ",
    text: "Wired Asset Tracker",
    subtext: "Reefers, Trucks, Sprinters, construction equipment",
    button: "Learn More",
  },
  {
    img: "https://truckx.com/wp-content/uploads/2020/09/best-affordable-solar-temperature-humidity-trailer-tracking-for-trucks-from-Truckx-min.png",
    text: "Temperature Sensor",
    subtext: "Pairs with TruckX Wired Asset Tracker",
    button: "Learn More",
  },
  {
    img: "https://truckx.com/wp-content/uploads/2020/09/best-affordable-Door-tracker-for-trucks-from-Truckx-min.png",
    text: "Door Sensor",
    subtext: "Pairs with TruckX Wired Asset Tracker",
    button: "Learn More",
  },
];

const Tracker = () => {
  return (
    <div className="TrackersnSensors">
      <h1>Asset Trackers & Sensors</h1>
      <div className="trackers">
        {TnSs.map((TnS, i) => {
          return <TS key={i} TnS={TnS} />;
        })}
      </div>
    </div>
  );
};

const TS = (props) => {
  return (
    <div className="sensors">
      <img src={props.TnS.img} />
      <div className="text-button">
        <div className="texts">
          <h2 className="text color1">{props.TnS.text}</h2>
          <p className="subtext">{props.TnS.subtext}</p>
        </div>
        <button className="buttonlm">{props.TnS.button}</button>
      </div>
    </div>
  );
};

export default Tracker;
