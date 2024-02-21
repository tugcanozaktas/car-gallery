import React from "react";
import "../styles/App.css";
import Navbar from "./Navbar";
import Featured from "./Featured";
import Cars from "./Cars";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Featured />
        <Cars />
      </div>
    </BrowserRouter>
  );
}

export default App;
