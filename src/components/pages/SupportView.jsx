import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVER = JSON.parse(import.meta.env.VITE_SERVER);
const token = localStorage.getItem("token");

export default function SupportView(props) {
  const user = props.user.Username;
  const [reports, setReports] = useState([]);
  const [editingReport, setEditingReport] = useState(null);
  const [updatedDiagnosis, setUpdatedDiagnosis] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const handleEditReport = (report) => {
    setEditingReport(report);
    setUpdatedDiagnosis(report.Support.Diagnosis);
    setUpdatedStatus(report.Status);
    setIsModalOpen(true);
    setIsModalOpen(true);
  };
  const handleSaveReport = (e) => {
    e.preventDefault();
    fetch(
      `http://${SERVER.hostname}:${SERVER.port}/SupportView/${editingReport.Tittle}`,
      {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Status: updatedStatus,
          Support: {
            Diagnosis: updatedDiagnosis,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          const updatedReports = reports.map((report) =>
            report.Tittle === editingReport.Tittle
              ? {
                  ...report,
                  Status: updatedStatus,
                  Support: {
                    Diagnosis: updatedDiagnosis,
                  },
                }
              : report
          );
          setReports(updatedReports);
          setEditingReport(null);
          setIsModalOpen(false);
          toast.success("Updated Completed", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        toast.error("Error updating!", {
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
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                <td className="p-2 border">{report.Support.Diagnosis}</td>
                <td className="p-2 border">{report.Status}</td>
                <td className="p-2 border">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={() => handleEditReport(report)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal DaisyUI */}
      {isModalOpen && (
        <dialog id="my_modal_4" className="modal" open>
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Editar Reporte</h3>
            <form onSubmit={handleSaveReport} className="space-y-2">
              <select
                id="status"
                onChange={(e) => setUpdatedStatus(e.target.value)}
                className="w-full px-2 py-1 border rounded"
              >
                <option value="">Select an Status</option>
                <option value="On progress">On progress</option>
                <option value="Finished">Finished</option>
              </select>
              <input
                id="category"
                type="text"
                onChange={(e) => setUpdatedDiagnosis(e.target.value)}
                className="w-full px-2 py-1 border rounded"
              ></input>

              <div className="modal-action">
                <button className="btn" onClick={closeModal}>
                  Close
                </button>
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
