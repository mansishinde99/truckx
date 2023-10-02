import React, { useState } from "react";
import "../Styles/Signup.css";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Signup = () => {
  
  return (
    <div className="signup">
      <nav className="nav-logo">
        <a href="/login">
          <img src="https://web.truckx.com/static/media/logo-blue.d1cfc0e5.png" />
        </a>
      </nav>
      <div className="fillings">
        <div className="titles">
          <h1 className="title">Fleet Management Admin Registration</h1>
          <p className="subtitle">Personal Information</p>
        </div>

        <form>
          <div className="info">
            <div className="info-content">
              <p className="details">
                First Name <span>*</span>
              </p>
              <input type="text"></input>
            </div>
            <div className="info-content">
              <p className="details">
                Last Name <span>*</span>
              </p>
              <input type="text"></input>
            </div>
          </div>

          <div className="info">
            <div className="info-content">
              <p className="details">
                Email Address <span>*</span>
              </p>
              <input type="email"></input>
            </div>
            <div className="info-content">
              <p className="details">
                Phone Number <span>*</span>
              </p>
              <input type="number"></input>
            </div>
          </div>

          <div className="info">
            <div className="info-content">
              <p className="details">
                Password <span>*</span>
              </p>
              <input
                type="password"  
              ></input>
            </div>
            <div className="info-content">
              <p className="details">
                Confirm Password <span>*</span>
              </p>
              <input type="password"></input>
            </div>
          </div>
        </form>

        <div className="companyinfo">
          <h1>Company Information</h1>
          <div className="info">
            <div className="info-content">
              <p className="details">
                DOT <span>*</span>
              </p>
              <input type="number"></input>
            </div>
            <div className="info-content">
              <p className="details">
                Confirm DOT <span>*</span>
              </p>
              <input type="number"></input>
            </div>
          </div>
          <div className="info">
            <div className="info-content">
              <p className="details">
                Customer/Subscription Id (System Generated): <span>*</span>
              </p>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div className="next-button">
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
