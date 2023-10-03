import React from "react";
import { Link } from "react-router-dom";

const LogoutHanddle = () => {
  localStorage.removeItem("token");
};

export default function NavbarPage() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">CampusLands</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/assets/avatar.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link
              to="/"
              onClick={LogoutHanddle}
              tabIndex="-1"
              className="dropdown-item text-sm"
            >
              LogOut
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
