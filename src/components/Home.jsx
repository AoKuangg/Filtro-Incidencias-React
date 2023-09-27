import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavbarPage from "./NavbarPage";

export default function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  let location = useLocation();
  if (!location.state || !location.state.user) {
    return null;
  }
  const userRole = location.state.user.Rol;

  return (
    <div className="">
      <NavbarPage />
      <div className="p-4">
        <h1>Welcome to Campuslands Incidents</h1>
        <p>This is the home page for logged-in users.</p>
      </div>
    </div>
  );
}
