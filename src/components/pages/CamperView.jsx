import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVER = JSON.parse(import.meta.env.VITE_SERVER);

export default function CamperView(props) {
  const user = props.user;
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    Tittle: "",
    Site: "",
    Description: "",
    DateOfIncident: "",
    Category: "",
    Severity: "",
    Status:"Not solved",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      Camper: {
        Username: user.Username,
      },
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(dataToSend),
    };
    console.log(JSON.stringify(dataToSend));
    try {
      const response = await fetch(
        `http://${SERVER.hostname}:${SERVER.port}/CamperView/NewReport`,
        config
      );

      if (response.status === 200) {
        toast.success("Report added!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormData({
          Tittle: "",
          Site: "",
          Description: "",
          DateOfIncident: "",
          Category: "",
          Severity: "",
          Status: "Not solved",
        });
      } else {
        toast.error("Error adding the report!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white">
      <div className="w-full max-w-md mx-auto bg-slate-700 bg-opacity-70 p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-emerald-500 font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              name="Tittle"
              value={formData.Tittle}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-emerald-500 font-bold mb-2">
              Site
            </label>
            <select
              name="Site"
              value={formData.Site}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Site</option>
              <option value="Sputnik">Sputnik</option>
              <option value="Apolo">Apolo</option>
              <option value="Artemis">Artemis</option>
              <option value="Hunters">Hunters</option>
              <option value="Review 1">Review 1</option>
              <option value="Review 2">Review 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-emerald-500 mb-2">
              Description
            </label>
            <textarea
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white  leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-emerald-500 font-bold mb-2">
              Date of Incident
            </label>
            <input
              type="date"
              name="DateOfIncident"
              value={formData.DateOfIncident}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-emerald-500 font-bold mb-2">
              Category
            </label>
            <select
              name="Category"
              value={formData.Category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              
              <option value="">Select Category</option>
              <option value="Physical">Physical</option>
              <option value="Digital">Digital</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-emerald-500 font-bold mb-2">
              Severity
            </label>
            <select
              name="Severity"
              value={formData.Severity}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Severity</option>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div className="flex items-center justify-between text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
