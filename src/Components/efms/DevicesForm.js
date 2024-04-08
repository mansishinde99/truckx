import React, { useState } from "react";
import "../../Styles/efmsStyle/DevicesForm.css";

const DevicesForm = () => {
  const [formOpen, setOpenForm] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [devices, setDevices] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [note, setNote] = useState("");

  const open = (e) => {
    e.preventDefault();
    setOpenForm(true);
  };

  const close = (e) => {
    e.preventDefault();
    setOpenForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    const allData = { deviceName, deviceType, deviceId, note };
    setDevices((nData) => [...nData, allData]);
    console.log("Device Name:", { deviceName });

    setDeviceName("");
    setDeviceType("");
    setDeviceId("");
    setNote("");
  };

  return (
    <div className="device-form">
      <button className="add-devices" onClick={open}>
        + Add Devices
      </button>

      {formOpen && (
        <form onSubmit={handleSubmit}>
          <div className="fillings">
            <div className="each-fill">
              <p className="device-detail">Device Name</p>
              <input
                placeholder="Enter Device Name"
                name="deviceName"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                required
              />
            </div>
            <div className="each-fill">
              <p className="device-detail">Device Type</p>
              <input
                placeholder="Select Device Type"
                name="deviceType"
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                required
              />
            </div>
            <div className="each-fill">
              <p className="device-detail">Device Id</p>
              <input
                placeholder="Enter Device ID"
                name="deviceId"
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
                required
              />
            </div>
            <div className="each-fill">
              <p className="device-detail">Note</p>
              <input
                placeholder="Enter Note"
                name="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
              />
            </div>
            <div className="blue-button">
                <button className="cancel-button" onClick={close}>
                  Cancel
                </button>
                <button
                  className="submit-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
          </div>
        </form>
      )}

      {submit && (
        <div>
          <h1>Submitted Data : </h1>
          {devices.map((device, i) => (
            <div className="data" key={i}>
              <p>Device Name: {device.deviceName}</p>
              <p>Device Type: {device.deviceType}</p>
              <p>Device ID: {device.deviceId}</p>
              <p>Note: {device.note}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DevicesForm;
