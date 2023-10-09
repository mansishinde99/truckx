import "./App.css";
import Main from "./Main";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/efms/Dashboard";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/dashboard" element={<Dashboard/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
