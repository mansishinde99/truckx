import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

const users = [
  {
    id: "1",
    email: "mansi@gmail.com",
    password: "Mansi",
  },
  {
    id: "2",
    email: "shinde@gmail.com",
    password: "Shinde",
  },
]; /* demo users data */

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Truckx Login";
    return () => {
      document.title = "Welcome to TruckX | Fleet Management & ELD solution";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const user = users.some(
        (user) => user.email === formValues.email && user.password === formValues.password
      );
      if (user) {
        navigate("/efms/Dashboard2"); 
      } else {
        setFormErrors({ email: "Invalid credentials" });
      }
    }
  };


  useEffect(() => {
    console.log(formErrors);
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   console.log(formValues)
    // }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validation = (values) => {
    const errors = {};

    if (!values.email || !values.password) {
      errors.email = errors.password = "Required field is empty";
    }
    return errors;
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <div className="left-content">
          <div className="text-part">
            <p className="first">ELD Trusted by 90,000+ Drivers</p>
            <p className="second">FMCSA Certified logbook with 24/7 Support</p>
          </div>
          {/* <div className="images">
            <img
              className="mobile-img"
              src="https://web.truckx.com/static/media/truck+phoneapp.1a7c0f70.png"
            />
            <img
              className="x-img"
              src="data:image/png;base64,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"
            />
          </div> */}
        </div>
      </div>

      <div className="right-side">
        <div className="right-content">
          <img className="logo"
            src="data:image/png;base64,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"
            alt="TruckX Logo"
          />
          <p className="title">Welcome to TruckX</p>
          <p className="sub-title">Sign in to your Admin Account</p>

          {formErrors.email && (
              <p style={{ color: "red", fontSize: ".9vw", marginLeft:"1vw" }} className="error">
                {formErrors.email}
              </p>
            )}

          <form onSubmit={handleSubmit}>
            <p className="email">
              Email address <span>*</span>
            </p>
            <input
              value={formValues.email}
              onChange={handleChange}
              name="email"
              className="email-input"
              type="email"
            />
            {/* {formErrors.email && (
              <p style={{ color: "red", fontSize: ".9vw" }} className="error">
                {formErrors.email}
              </p>
            )} */}
            <p className="password">
              Password <span>*</span>
            </p>
            <input
              value={formValues.password}
              onChange={handleChange}
              name="password"
              className="password-input"
              type="password"
            />
            {/* {formErrors.password && (
              <p style={{ color: "red", fontSize: ".9vw" }} className="error">
                {formErrors.password}
              </p>
            )} */}
            <div className="option">
              <p className="forgot">Forgot Password ?</p>
              <button type="submit" className="signin">
                Sign In
              </button>
            </div>
          </form>
          <p className="noacc">
            Don’t have an account ?{" "}
            <button className="signup">
              <a href="/signup" target="_self">
                Sign Up Here
              </a>
            </button>
          </p>
          <a className="loginsupport" href="/loginsupport">
            Login to Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
