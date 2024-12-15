import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen/Home";

function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
      </Router> 
      

    </div>
  );
}

export default App;
