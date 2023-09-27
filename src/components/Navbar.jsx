import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-slate-700 ">
      <Link to="/">
        <h1 className="text-xl font-bold text-teal-400">
          Campuslands Incidents
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <Link to="/SignIn">
          <button className="px-4 py-2 bg-emerald-400 hover:bg-emerald-600 text-white rounded-md">
            Login
          </button>
        </Link>
        <Link to="/signUp">
          <button className="px-4 py-2 bg-emerald-400 hover:bg-emerald-600 text-white rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
