import React, { useState } from "react";
import "../../Styles/efmsStyle/DriversForm.css";

const DriversForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [license, setLicense] = useState("");
  const [info, setInfo] = useState([]);
  const [submittedData, setSubmittedData] = useState(false);

  const openForm = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeForm = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newData = { firstName, lastName, email, cell, license };
    setInfo((nData) => [...nData, newData]);
    setSubmittedData(true);

    setFirstName("");
    setLastName("");
    setEmail("");
    setCell("");
    setLicense("");
  };

  return (
    <div className="popup">
      <button className="add-drivers" onClick={openForm}>
        + Add Drivers
      </button>

      <div className={isOpen ? "blur-background" : ""}></div>

      {isOpen && (
        <div className="form-popup">
          <form onSubmit={submitForm}>
            <div className="content">
              <div className="filling">
                <p>First Name</p>
                <input
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="filling">
                <p>Last Name</p>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="content">
              <div className="filling">
                <p>Email Id</p>
                <input
                  placeholder="Email Id"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="filling">
                <p>Cell</p>
                <input
                  placeholder="Phone Number"
                  name="cell"
                  type="number"
                  value={cell}
                  onChange={(e) => setCell(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="content">
              <div className="filling">
                <p>License</p>
                <input
                  placeholder="License No."
                  name="license"
                  value={license}
                  onChange={(e) => setLicense(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button className="cancel-button" onClick={closeForm}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {submittedData && (
        <div className="submitted-data">
          <h1>Submitted Data:</h1>
          {info.map((val, index) => (
            <div className="data" key={index}>
              <p>
                <strong>First Name:</strong> {val.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {val.lastName}
              </p>
              <p>
                <strong>Email Id:</strong> {val.email}
              </p>
              <p>
                <strong>Cell:</strong> {val.cell}
              </p>
              <p>
                <strong>License:</strong> {val.license}
              </p>

              <div className="blue-buttons">
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DriversForm;
