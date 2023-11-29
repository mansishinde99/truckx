import React from "react";
import "../Styles/Fleet.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PersonIcon from "@mui/icons-material/Person";
import NearMeIcon from "@mui/icons-material/NearMe";
import EastIcon from "@mui/icons-material/East";

const widgets = [
  {
    img: "https://truckx.com/wp-content/uploads/elementor/thumbs/scalableIcon-qfswohuscd9hagq970rwkwma09y6g8fv4d53mviz4o.png",
    text: "Scalable IoT & ELD Platform",
  },
  {
    img: "https://truckx.com/wp-content/uploads/elementor/thumbs/user-tick-qfswtbqxgpviybpnzlxvw6qjwk5308m7g9txf2d55k.png",
    text: "Customizable Solutions",
  },
  {
    img: "https://truckx.com/wp-content/uploads/elementor/thumbs/chart-qfsxrbksn0euumbzhay52lwpc8kze5kq4j849byk48.png",
    text: "Real-Time Insights",
  },
  {
    img: "https://truckx.com/wp-content/uploads/elementor/thumbs/mobile-qfsxqunp7zrp1n0k83mutq6enawdjlpk27hdmcnn88.png",
    text: "Intuitive Interface Design",
  },
];

const Fleet = () => {
  return (
    <div className="fleet">
      <h1 className="fleet-head">All-In-One Fleet Management</h1>
      <p className="fleet-text">
        All-In-One IoT Platform for any size Fleet. ELD Compliance, Dashcam,
        Asset Tracking, Sensors
      </p>
      <div className="widget-container">
        {widgets.map((widget) => (
          <div className="fleet-widget">
            <img src={widget.img}/>
            <p>{widget.text}</p>
          </div>
        ))}
      </div>
      <iframe src="https://youtu.be/lSE_PIJR20g"></iframe>
      <div className="dashcam">
        <div className="textpart">
          <h1>AI Cloud Dashcam</h1>
          <p>
            <VideocamIcon
              style={{
                width: "1.5vw",
                marginBottom: "-0.5vw",
                marginRight: "0.5vw",
              }}
            />
            Live Video
          </p>
          <p>
            <ReportProblemIcon
              style={{
                width: "1.5vw",
                marginBottom: "-0.5vw",
                marginRight: "0.5vw",
              }}
            />
            Defend False Claims
          </p>
          <p>
            <PersonIcon
              style={{
                width: "1.5vw",
                marginBottom: "-0.5vw",
                marginRight: "0.5vw",
              }}
            />
            Monitor Driver Behavior
          </p>
          <p>
            <NearMeIcon
              style={{
                width: "1.5vw",
                marginBottom: "-0.5vw",
                marginRight: "0.5vw",
              }}
            />
            Live GPS Tracking
          </p>
          <div className="warranty">
            <p>1 Year Warranty</p>
            <p>Internet Included</p>
          </div>
          <button className="learnmore-button">
            Learn More
            <EastIcon
              style={{
                width: "1vw",
                marginBottom: "-0.6vw",
                marginLeft: "0.3vw",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
