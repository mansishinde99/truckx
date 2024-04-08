import React, { useState } from "react";
import "../../Styles/efmsStyle/TrucksForm.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

const TrucksForm = () => {
  const [openForm, setOpenForm] = useState(false);
  const [allData, setAllData] = useState([]);
  const [editing, setEditing] = useState(false); // Track the index being edited
  const initialValues = {
    vehicleType: "",
    vehicleNumber: "",
    vehicleModel: "",
    fuelType: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const openClick = () => {
    setOpenForm(true);
    setEditing(false); // Reset editing index when opening the form for adding a new vehicle
  };

  const closeClick = () => {
    setOpenForm(false);
    setFormErrors({});
  };

  const clickSubmit = (e) => {
    e.preventDefault();

    // Validate form values before submission
    const errors = validate(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newData = { ...formValues };

    if (editing !== false) {
      // If in edit mode, update the data at editing
      const updatedData = [...allData];
      updatedData[editing] = newData;
      setAllData(updatedData);
      setEditing(null); // Reset editing after editing
    } else {
      // If not in edit mode, add new data to allData
      setAllData([...allData, newData]);
    }

    setOpenForm(false);
    setFormValues(initialValues);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.vehicleType) {
      errors.vehicleType = "Vehicle Type is required";
    }
    if (!values.vehicleNumber) {
      errors.vehicleNumber = "Vehicle Number is required";
    }
    if (!values.vehicleModel) {
      errors.vehicleModel = "Vehicle Model is required";
    }
    if (!values.fuelType) {
      errors.fuelType = "Fuel Type is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const deleteData = (i) => {
    const newInfo = [...allData];
    newInfo.splice(i, 1);
    setAllData(newInfo);
  };

  const editData = (i) => {
    const dataEdit = allData[i];
    setFormValues(dataEdit);
    setOpenForm(true);
    setEditing(i); // Set the editing index to the index being edited
  };

  return (
    <div className="popup">
      <button className="addTruckButton" onClick={openClick}>
        + Add Vehicle
      </button>

      {openForm && (
        <div className="form-popup">
          <form onSubmit={clickSubmit}>
            <div className="content">
              <div className="filling">
                <p>
                  Vehicle Type <span className="imp">*</span>
                </p>
                <input
                  placeholder="Vehicle Type"
                  name="vehicleType"
                  value={formValues.vehicleType}
                  onChange={handleChange}
                />
                {formErrors.vehicleType && (
                  <p
                    style={{ color: "red", fontSize: ".9vw" }}
                    className="error"
                  >
                    {formErrors.vehicleType}
                  </p>
                )}
              </div>
              <div className="filling">
                <p>
                  Vehicle Number<span className="imp">*</span>
                </p>
                <input
                  placeholder="Vehicle Number"
                  name="vehicleNumber"
                  value={formValues.vehicleNumber}
                  onChange={handleChange}
                />
                {formErrors.vehicleNumber && (
                  <p style={{ color: "red", fontSize: ".9vw" }} className="error">{formErrors.vehicleNumber}</p>
                )}
              </div>
            </div>
            <div className="content">
              <div className="filling">
                <p>
                  Vehicle Model<span className="imp">*</span>
                </p>
                <input
                  placeholder="Vehicle Model"
                  name="vehicleModel"
                  value={formValues.vehicleModel}
                  onChange={handleChange}
                />
                {formErrors.vehicleModel && (
                  <p style={{ color: "red", fontSize: ".9vw" }} className="error">{formErrors.vehicleModel}</p>
                )}
              </div>
              <div className="filling">
                <p>
                  Fuel Type<span className="imp">*</span>
                </p>
                <input
                  placeholder="Fuel Type"
                  name="fuelType"
                  value={formValues.fuelType}
                  onChange={handleChange}
                />
                {formErrors.fuelType && (
                  <p style={{ color: "red", fontSize: ".9vw" }} className="error">{formErrors.fuelType}</p>
                )}
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
            <button className="cancel-button" onClick={closeClick}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {allData.length > 0 && (
        <div className="inData">
          <h1>Submitted Data:</h1>
          <table>
            <thead>
              <tr>
                <th>Vehicle Type</th>
                <th>Vehicle Number</th>
                <th>Vehicle Model</th>
                <th>Fuel Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((value, i) => (
                <tr className="data" key={i}>
                  <td>{value.vehicleType}</td>
                  <td>{value.vehicleNumber}</td>
                  <td>{value.vehicleModel}</td>
                  <td>{value.fuelType}</td>
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

export default TrucksForm;
