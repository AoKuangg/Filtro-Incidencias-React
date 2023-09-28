import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavbarPage from "./NavbarPage";
import CamperView from "./pages/CamperView";
import TrainerView from "./pages/TrainerView";
import SupportView from "./pages/SupportView";

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
  let contentView;

  switch (userRole) {
    case "Camper":
      contentView = <CamperView user={location.state.user}/>;
      break;
    case "Trainer":
      contentView = <TrainerView/>;
      break;
    case "Support":
      contentView = <SupportView/>;
      break;
    default:
      contentView = null;
      break;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen ">
      <NavbarPage />
      <div className="p-4 ">
        <h1 className="text-4xl font-semibold mb-2  flex flex-col justify-center items-center">Welcome to Campuslands Incidents</h1>
        <h3 className="text-xl  flex flex-col justify-center items-center">Hello, {location.state.user.Username}!</h3>
        <div className="mt-4">
          {contentView}
        </div>
      </div>
    </div>
  );
}
