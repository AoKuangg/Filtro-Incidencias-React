import React from "react";
import { Link } from "react-router-dom";

const LogoutHanddle = ()=>{
    localStorage.removeItem("token");
};

export default function NavbarPage() {
  return (
    <div className="navbar bg-slate-700">
      <div className="navbar-start">
        <a className="navbar-item text-xl font-bold text-teal-400">Campuslands Incidents</a>
      </div>
      <div className="navbar-end">
        <div className="avatar avatar-ring avatar-md">
          <div className="dropdown-container">
            <div className="dropdown">
              <label
                className="btn btn-ghost flex cursor-pointer px-0"
                tabIndex="0"
              >
                <img src="/assets/avatar.png" alt="" />
              </label>
              <div className="dropdown-menu dropdown-menu-bottom-left">
                <Link to="/" onClick={LogoutHanddle} tabIndex="-1" className="dropdown-item text-sm">
                  LogOut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
