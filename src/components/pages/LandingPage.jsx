import React from "react";
import Navbar from "../Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden ">
        <div className="w-full lg:flex lg:justify-center lg:items-center p-10 ">
          <img
            src="/assets/incident.png"
            className="max-w-full h-auto md:w-2/3 lg:w-1/3 sm:w-full md:mx-auto lg:mx-0"
            alt=""
          />
          <div className="text-center md:text-center text-sky-300 mt-4 md:mt-0 md:ml-4">
            <h1 className="text-4xl md:text-4xl lg:text-5xl">
              Welcome to the Campuslands Incident Management
            </h1>
            <p className="mt-4 text-xl md:text-xl lg:text-2xl">
              On this page you will be able to report campus incidents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
