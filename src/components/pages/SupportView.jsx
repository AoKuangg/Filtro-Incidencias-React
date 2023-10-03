import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVER = JSON.parse(import.meta.env.VITE_SERVER);
const token = localStorage.getItem("token");

export default function SupportView(props) {
  const user = props.user.Username;
  const [reports, setReports] = useState([]);
  
  useEffect(() => {
    fetch(`http://${SERVER.hostname}:${SERVER.port}/SupportView/${user}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReports(data.data);
      })
      .catch((error) => {
        toast.error("Error in the fetch!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }, []);

  return (
    <div>
      <div>
        <h2>Incidents</h2>
      </div>
      <div className="flex w-full overflow-x-auto">
        <table className="table-zebra table border-collapse">
          <thead>
            <tr>
            <th className="p-2 border">Title</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Diagnosis</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
          {reports.map((report) => (
              <tr key={report._id} className="hover:bg-zinc-700">
                <td className="p-2 border">{report.Tittle}</td>
                <td className="p-2 border">{report.Description}</td>
                <td className="p-2 border">{report.Diagnosis}</td>
                <td className="p-2 border">{report.Status}</td>
                <td className="p-2 border">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
