import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <AnimatedRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
