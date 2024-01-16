import React, { useState } from "react";
import "../../Styles/efmsStyle/DriversForm.css";

const DriversForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState();

  const openForm = (e) => {
    // e.preventDefault();
    setIsOpen(true);
    document.body.classList.add("blur");
  };

  const closeForm = (e) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.classList.remove("blur");
  };

  const submitForm = (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const cell = e.target.elements.cell.value;
    const license = e.target.elements.license.value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email Id:", email);
    console.log("Cell:", cell);
    console.log("License:", license);

    e.target.elements.firstName.value = "";
    e.target.elements.lastName.value = "";
    e.target.elements.email.value = "";
    e.target.elements.cell.value = "";
    e.target.elements.license.value = "";

    const newData = {firstName,lastName,email,cell,license};

    setSubmittedData(...submittedData, newData);

  };

  return (
    <div className="popup">
      <button className="add-drivers" onClick={(e) => openForm(e)}>
        + Add Drivers
      </button>

      <div className={isOpen ? "blur-background" : ""}></div>

      {isOpen && (
        <div className="form-popup">
          <form onSubmit={submitForm}>
            <div className="content">
              <div className="filling">
                <p>First Name</p>
                <input placeholder="First Name" name="firstName" required />
              </div>
              <div className="filling">
                <p>Last Name</p>
                <input placeholder="Last Name" name="lastName" required />
              </div>
            </div>
            <div className="content">
              <div className="filling">
                <p>Email Id</p>
                <input placeholder="Email Id" name="email" type="email" required/>
              </div>
              <div className="filling">
                <p>Cell</p>
                <input placeholder="Phone Number" name="cell" type="number" required/>
              </div>
            </div>
            <div className="content">
              <div className="filling">
                <p>License</p>
                <input placeholder="License No." name="license" required />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button className="cancel-button" onClick={(e) => closeForm(e)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {submittedData && (
        <div className="submitted-data">
          <h1>Submitted Data:</h1>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email Id: {submittedData.email}</p>
          <p>Cell: {submittedData.cell}</p>
          <p>License: {submittedData.license}</p>
        </div>
      )}
    </div>
  );
};

export default DriversForm;
