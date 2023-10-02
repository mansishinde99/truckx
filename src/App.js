import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Login from "./Components/Login";
import { useState } from "react";
import Register from "./Components/Register";
import Signup from "./Components/Signup";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
