import React from "react";
import "../../Styles/efmsStyle/Dashboard2.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Dashboard2 = () => {
  const navigate = useNavigate();
  

  const navigateToForm = (form) => {
    if (form == "drivers") {
      navigate("/DriversForm");
    } else if (form == "trucks") {
      navigate("/TrucksForm");
    } else if (form == "devices") {
      navigate("/DevicesForm");
    }
  };

  useEffect(() => {
    document.title = "Dashboard";
    return () => {
      document.title = "Truckx Login";
    };
  }, []);



  return (
    <div className="dashboard2">
      <div className="navbar">
        <div className="left">
          <img
            className="truck-logo"
            src="data:image/png;base64,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"
          />
          <p className="dash-board">Dashboard</p>
        </div>
        <div className="right">
          <img
            className="profile"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAMFBMVEXk5ueutLfn6eq4vcCrsbTh4+TJzc+1ur3b3t/q7O3Q09Wyt7q7wMLU19nGysy/w8adxsz9AAAD00lEQVR4nO2b27KrIAxAJYDgBf3/vz2gnu62u9tCYhM6w3pq39YEAwFC1zUajUaj0Wg0Go1Go9EQYRgG60MI3sefIG3zF9DZsE7mxrQEK+30AgA/6qin7oj/1tFWFtnBp2iqXxjjVjtI293h9QvLm+xaS1zB9q/Ceeeq+q4G18G7U8/NVfsKVPu3npvrKO3ZrVmiUXWRjSrMmaLSqvYk5+tSzR16adWhTDSllYwq5GX9g2oQUfVTqahSk0TNAiXZdAvqzF8EIMZ+U+X/VD1KVCnHPf5Qmvc/QWUWxaTTAa9p4Zz/ENSe9Uu1aNEIpyky8Y+gcqY/ECKq1Mwnip6idpxnE4WFFFPO4Z9ppgubqHckU+W4RCHQRJVhW1FHUkKlMpXLdKGasi1T+RvSP2CrUokJFVOKydTi66iDicuUKspWpJAKqQ3TTL/XlCrK951+Te7T51PNZYrf7u2Ylcv0a9Z9INdSXNuTL6pPiTW/0VyiHRD3UT2fKeVgIsJ4Mv01+/1uoKxSZuU87QmUcynWO1RKkTLxnp/jc4r7pN+ip1S2A5QDwK79/NfnyCNUw3l4epji0p838Q8wVSrzdcQBIqkYa5N7oHxNdUL9SMUVtdCleaJs/hcULSz/hDomilUlI7oxZnqKi8YZ4H2zXFqaKmiXA/t2CTBmqaNdMu6qz105tyPnAPTur8ZOY/RYU8c02NR7/MpzDnUM/A/Q+SU1IN904w8z9baKHtlnhsGGZZ61i+h5XUZb07A/AQCd9RG7/awXeERa55kjjmFcllW7lEUJNW0fQEjh7WqQjg5+3Ax3v8fE355K6HXt4wQgagvgez1tjyHOlyilJrcEoWkArA/zO8enCLveW+bQpmAWad7mWB1Dy9jYCWMcc+zJhJqYypW0FpUH81GWY4mFIazYaD66jp/9YMHPF3juuE8eUviX9RIWoz70DcTa/rJ4/nfVH9hcAYzTxZ4bl7/ygrNXZRSMuTa1YLx64O9cLw0ruZXrVFVdtcMG/7mAHq7XXE9C5ikJSXW9QHSgth3kqU70kpDayZHLRP1YuURjVEmqw0eT/hnCbIV+BoMD/8yL2nBQitFIVXILD0IVtXFBXOLQVVHvPPG3zRQQXenoy2Ya5VnF/5HuIB5Piniq8ssgobFPlF0CUx4UUim8WJcLaWFSXdAJjackqMXP3S9WzTcFUdGCjiqpufTGnB1ULSuqsjerglPUTm5OiQ9+OqzIi6nkZLqTOaVa8c80t41edNo/TPPaFAVq/V/kPfcQTyiV+SSRe0f6mjxTLY/LmlChBnJEG436+Af4DDRi93dARQAAAABJRU5ErkJggg=="
          />
          <p className="demo">
            Welcome User
          </p>
          <div className="dropdown-content">
          <div className="dropdown-imgtext">
                <img src="https://web.truckx.com/static/media/logoutMenuIcon.c722530f.svg" />
                <a href="/login" style={{ color: "red" }}>
                  Logout
                </a>
          </div>
          </div>
        </div>
      </div>

<div className="data">
      <div className="data-buttons">
        <button onClick={() => navigateToForm("drivers")}>Drivers</button>
        <button onClick={() => navigateToForm("trucks")}>Trucks</button>
        <button onClick={() => navigateToForm("devices")}>Devices</button>
      </div>
      </div>
    </div>
  );
};

export default Dashboard2;
