import React from "react";
import "../Styles/Platform.css";
import StarIcon from "@mui/icons-material/Star";

const Platform = () => {
  return (
    <div className="management">
      <div className="platform">

        <div className="text-part">
          <p className="first">Best & Affordable</p>
          <p className="second">Fleet Management IoT & ELD Platform</p>
          <p className="third">ELD | Dashcam | Asset Tracking | Sensors</p>
          <button className="order">Order Online</button>
          <div>
            <span>
              <StarIcon style={{margin:"0 8px -5px 0", color:"white"}} />
            </span>
            <span className="fourth">Trusted by 90,000+ Drivers</span>
          </div>
        </div>
        <div className="img-part">
          <img  className="img1" src="https://truckx.com/wp-content/uploads/2020/09/TruckX-best-affordable-ELD-system-desktop-1-1-2048x1359.png" />
          <img className="img2" src="https://truckx.com/wp-content/uploads/2020/12/TruckX_iot_hardware_dashcamera_devices.png" />
        </div>
      </div>
    </div>
  );
};

export default Platform;
