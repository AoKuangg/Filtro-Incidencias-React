import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import LandingPage from "./components/pages/LandingPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/SignIn" element={<LogIn />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
