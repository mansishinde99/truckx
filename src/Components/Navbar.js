import React, { useState } from "react";
import "../Styles/Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [openedNav, setOpenedNav] = useState();
  const [openDrop, setOpenDrop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navDrop = () => {
    setOpenedNav(!openedNav);
  };

  const openDropdownOnHover = (dropDown) => {
    setOpenDrop(dropDown);
  };

  const closeDropdown = () => {
    setOpenDrop(null);
  };

  const menuIcon = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="nav">
      <div className="navContent">
        <ul>
          <div className="navLogo">
            <a href="/">
              <img src="https://truckx.com/wp-content/uploads/2019/08/pure-blue-logo.png" />
            </a>
          </div>
          <li className="dropdown-container">
            <a className="product" onClick={navDrop}>
              Products
              <KeyboardArrowDownIcon style={{ marginBottom: "-7px" }} />
            </a>
            {/* {openedNav && ( */}
            <div className="dropdown-content">
              <a href="#cloudDashcam">Cloud Dashcam</a>
              <a
                onMouseEnter={() => openDropdownOnHover("ELD")}
                onMouseLeave={closeDropdown}
              >
                ELD <KeyboardArrowRightIcon style={{ marginBottom: "-7px" }} />
              </a>

              <a
                onMouseEnter={() => openDropdownOnHover("Asset Tracker")}
                onMouseLeave={closeDropdown}
              >
                Asset Trackers
                <KeyboardArrowRightIcon style={{ marginBottom: "-7px" }} />
              </a>

              <a
                onMouseEnter={() => openDropdownOnHover("IoT Sensors")}
                onMouseLeave={closeDropdown}
              >
                IoT Sensors{" "}
                <KeyboardArrowRightIcon style={{ marginBottom: "-7px" }} />
              </a>
            </div>

            {openDrop === "ELD" && (
              <div className="inDropContent">
                <a href="#bluetoothELDdevice">Bluetooth ELD Device</a>
                <a href="#wiredELDdevice">Wired ELD Tablet</a>
              </div>
            )}
            {openDrop === "Asset Tracker" && (
              <div className="inDropContent">
                <a href="#sat">Smart Asset Tracker</a>
                <a href="#wat">Wired Asset Tracker</a>
              </div>
            )}
            {openDrop === "IoT Sensors" && (
              <div className="inDropContent">
                <a href="#t&h">Temperature & Humidity</a>
                <a href="#DoorSensors">Door Sensor</a>
              </div>
            )}
            {/* )} */}
          </li>
          <li className="dropdown-container">
            <a>
              Support
              <KeyboardArrowDownIcon
                style={{ marginBottom: "-7px", width: "1.3vw" }}
              />
            </a>
            <div className="dropdown-content">
              <a href="#eld">FAQ</a>
              <a href="#cloud">Help Videos </a>
              <a href="#cloud">User Manuals</a>
              <a href="#cloud">Get Fleet App</a>
              <a href="#cloud">Get Driver App</a>
            </div>
          </li>
          <li className="dropdown-container">
            <a href="#blog">Blog</a>
          </li>
          <li className="dropdown-container">
            <a href="#career">Career</a>
          </li>
          <li className="dropdown-container">
            <a href="#contact">Contact</a>
          </li>
          <button className="loginButton">
            <a href="/login" target="_blank">
              LOGIN
            </a>
          </button>
          <div className="menuIcon" onClick={menuIcon}>
            <MenuIcon />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
