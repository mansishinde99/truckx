import React, { useState } from "react";
import "../../Styles/efmsStyle/DriversForm.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const DriversForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState([]);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    license: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [editing, setEditing] = useState(false);


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

    const errors = validate(formValues); // Validate form values
    if (Object.keys(errors).length > 0) { // If there are validation errors
      setFormErrors(errors);  // Set formErrors state with validation errors
      return;
    }

    const newData = { ...formValues }; // Copy formValues into newData
    console.log(newData)

    if (editing !== false) { // If in edit mode, update the data at editing
      const updatedData = [...info];
      updatedData[editing] = newData;
      setInfo(updatedData);  
      setEditing(false);  // Exit editing after editing
    } else {
      setInfo([...info, newData]);
    }

    setIsOpen(false);
    setFormValues(initialValues);
  };




  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/.test(values.email)) {
      errors.email = "Invalid Email Format";
    }
    if (!values.phone) {
      errors.phone = "Phone is Required";
    }
    else if (values.phone.length !== 10){
      errors.phone = "Enter Valid Phone Number";
    } 
    if (!values.license) {
      errors.license = "License is Required";
    }
    return errors;
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };


  const cancelEdit = (e) => {
    e.preventDefault();
    setFormValues(initialValues);
    setIsOpen(false); // Close the form
  };


  const handleCancel = (e) => {
    closeForm(e);
    cancelEdit(e);
  };

  
  const deleteData = (i) => {
    const newInfo = [...info]; // Create a copy of info array
    newInfo.splice(i, 1); // From index(i) it starts removing the element and 1 element is to be removed
    setInfo(newInfo); // Update the state with the modified array
  };

  const editData = (i) => {
    const dataEdit = info[i]; 
    setFormValues(dataEdit);
    setIsOpen(true);
    setEditing(i); // Set the editing index to the index being edited
  };

  return (
    <div className="popup">
      <button className="add-drivers" onClick={openForm}>
        + Add Drivers
      </button>

      {isOpen && (
        <div className="form-popup">
          <form onSubmit={submitForm}>
            <div className="content">
              <div className="filling">
                <p>
                  First Name <span className="imp">*</span>
                </p>
                <input
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && (
                  <p style={{ color: "red", fontSize: ".9vw" }} className="error">{formErrors.firstName}</p>
                )}
              </div>
              <div className="filling">
                <p>
                  Last Name <span className="imp">*</span>
                </p>
                <input
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && (
                  <p style={{ color: "red", fontSize: ".9vw" }} className="error">{formErrors.lastName}</p>
                )}
              </div>
            </div>
            <div className="content">
              <div className="filling">
                <p>
                  Email Id <span className="imp">*</span>
                </p>
                <input
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <p style={{ color: "red", fontSize: ".9vw" }} className="error">{formErrors.email}</p>
                )}
              </div>
              <div className="filling">
                <p>
                  Phone <span className="imp">*</span>
                </p>
                <input
                  name="phone"
                  type="number"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                {formErrors.phone && (
                  <p style={{ color: "red", fontSize: ".9vw" }} className="error">{formErrors.phone}</p>
                )}
              </div>
            </div>
            <div className="content">
              <div className="filling">
                <p>
                  License <span className="imp">*</span>
                </p>
                <input
                  name="license"
                  value={formValues.license}
                  onChange={handleChange}
                />
                {formErrors.license && (
                  <p style={{ color: "red", fontSize: ".9vw" }} className="error">{formErrors.license}</p>
                )}
              </div>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button className="cancel-button" onClick={(e) => handleCancel(e)}>
              Cancel
            </button>
          </form>
        </div>
      )}


      {info.length > 0 && (
        <div className="inData">
          <h1>Submitted Data:</h1>

          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Contact No.</th>
                <th>License</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {info.map((val, i) => (
                <tr className="data" key={i}>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{val.license}</td>
                  <td className="ed-buttons">
                    <button className="edit-button" onClick={() => editData(i)}>
                      <BsFillPencilFill className="edit-button" />
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => deleteData(i)}
                    >
                      <BsFillTrashFill className="delete-button" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default DriversForm;
