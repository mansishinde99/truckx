import "./App.css";
import Main from "./Main";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
