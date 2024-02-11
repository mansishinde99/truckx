import React, { useState } from "react";
import "../../Styles/efmsStyle/TrucksForm.css";

const TrucksForm = () => {
  const [openForm, setOpenForm] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [allData, setAllData] = useState([]);
  const [onFormSubmit, setOnFormSubmit] = useState(false);
  const allTruck = {vehicleType, vehicleNumber, vehicleModel, fuelType}
  
  const openClick = () => {
    setOpenForm(true);
  };
  
  const closeClick = () => {
    setOpenForm(false);
  };
  
  const clickSubmit = (e) => {
    e.preventDefault();
    setAllData((newData) => [...newData, allTruck]);
    setOnFormSubmit(true);
    // setOpenForm(false);  //when the form gets submitted the form will be closed
    console.log("console: ", vehicleType);

    setVehicleType("");
    setVehicleNumber("");
    setVehicleModel("");
    setFuelType("");
  };

  return (
    <div className="truck-form">
      <button className="addTruckButton" onClick={openClick}>
        + Add Trucks
      </button>

      {openForm && (
        <form onSubmit={clickSubmit}>
          <div className="fillings">
            <div className="eachFill">
              <p className="truckDetails">Vehicle Type</p>
              <input
                placeholder="Enter Vehicle Type"
                type="text"
                name="vehicleType"
                onChange={(e) => setVehicleType(e.target.value)}
                value={vehicleType}
                required
              />
            </div>
            <div className="eachFill">
              <p className="truckDetails">Vehicle Number</p>
              <input
                placeholder="Enter Vehicle Number"
                type="text"
                name="truckNumber"
                onChange={(e) => setVehicleNumber(e.target.value)}
                value={vehicleNumber}
                required
              />
            </div>
            <div className="eachFill">
              <p className="truckDetails">Vehicle Model</p>
              <input
                placeholder="Enter Vehicle Model"
                type="text"
                name="vehicleModel"
                onChange={(e) => setVehicleModel(e.target.value)}
                value={vehicleModel}
                required
              />
            </div>
            <div className="eachFill">
              <p className="truckDetails">Fuel Type</p>
              <input
                placeholder="Enter Fuel Type"
                type="text"
                name="fuelType"
                onChange={(e) => setFuelType(e.target.value)}
                value={fuelType}
                required
              />
            </div>
          </div>
          <div className="blue-buttons">
            <button className="cancelButton" onClick={closeClick}>
              Cancel
            </button>
            <button className="submitButton" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}

      {onFormSubmit && (
        <div className="inData">
          {allData.map((value) => (
            <div className="displayedData" key={value}>
              <p className="truckData">Vehicle Type: {value.vehicleType}</p>
              <p className="truckData">Vehicle Number: {value.vehicleNumber}</p>
              <p className="truckData">Vehicle Model: {value.vehicleModel}</p>
              <p className="truckData">Fuel Type: {value.fuelType}</p>

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

export default TrucksForm;
