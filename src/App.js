import "./App.css";
import Main from "./Main";
import Login from "./Components/Login";
import Login2 from "./Components/Login2";
import Signup from "./Components/Signup";
import Dashboard from "./Components/efms/Dashboard";

import Dashboard2 from "./Components/efms/Dashboard2";
import DriversForm from "./Components/efms/DriversForm";
import TrucksForm from "./Components/efms/TrucksForm";
import DevicesForm from "./Components/efms/DevicesForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login2" element={<Login2/>}/>
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/efms/dashboard" element={<Dashboard/>}/>  
          <Route exact path="/efms/dashboard2" element={<Dashboard2/>}/>
          <Route exact path="/driversForm" element={<DriversForm/>}/>
          <Route exact path="/trucksForm" element={<TrucksForm/>}/>
          <Route exact path="/devicesForm" element={<DevicesForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
