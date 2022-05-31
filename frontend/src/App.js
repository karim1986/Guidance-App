import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="app__container">
          <AnimatedRoutes />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
