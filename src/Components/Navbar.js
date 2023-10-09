import React, { useState } from "react";
import "../Styles/Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Navbar = () => {
  return (
    <div className="nav">
      <div className="navContent">
        <ul>
          <div className="navLogo">
            <a href="/"><img src="https://truckx.com/wp-content/uploads/2019/08/pure-blue-logo.png" /></a>
          </div>
          <li>
            <a className="product" href="#products">
              Products
              <KeyboardArrowDownIcon style={{ marginBottom: "-7px" }} />
            </a>
          </li>
          <li>
            <a href="#support">
              Support{" "}
              <KeyboardArrowDownIcon
                style={{ marginBottom: "-7px", width: "1.3vw" }}
              />
            </a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button className="loginButton">
            <a href="/login" target="_self">LOGIN</a>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
