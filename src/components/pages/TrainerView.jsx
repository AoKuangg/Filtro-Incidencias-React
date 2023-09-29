import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVER = JSON.parse(import.meta.env.VITE_SERVER);
const token = localStorage.getItem("token");

export default function TrainerView(props) {
  const user = props.user;
  const [reports, setReports] = useState([]);
  const [editingReport, setEditingReport] = useState(null);
  // States for editing
  const [updatedSeverity, setUpdatedSeverity] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedSupportUsername, setUpdatedSupportUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://${SERVER.hostname}:${SERVER.port}/TrainerView/`, {
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

  // Edit management
  const handleEditReport = (report) => {
    setEditingReport(report);
    setUpdatedSeverity(report.Severity);
    setUpdatedCategory(report.Category);
    // Verify if support username is defined
    if (report.Support) {
      setUpdatedSupportUsername(report.Support.Username);
    } else {
      setUpdatedSupportUsername(""); // Default value
    }
    setIsModalOpen(true);
  };

  // Put function
  const handleSaveReport = (e) => {
    e.preventDefault();
    // Put to the server
    fetch(
      `http://${SERVER.hostname}:${SERVER.port}/TrainerView/${editingReport.Tittle}`,
      {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Severity: updatedSeverity,
          Category: updatedCategory,
          Support: {
            Username: updatedSupportUsername,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Response management
        console.log(data);
        // Actualization of the list
        const updatedReports = reports.map((report) =>
          report.Tittle === editingReport.Tittle
            ? {
                ...report,
                Severity: updatedSeverity,
                Category: updatedCategory,
                Support: {
                  Username: updatedSupportUsername,
                },
              }
            : report
        );
        setReports(updatedReports);
        // Reset the edit camp
        setEditingReport(null);
        setIsModalOpen(false);
        toast.success('🦄 Updated!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })
      .catch((error) => {
        toast.error("Error!", {
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
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Lista de Reportes</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Severity</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td className="p-2 border">{report.Tittle}</td>
              <td className="p-2 border">{report.Description}</td>
              <td className="p-2 border">{report.Severity}</td>
              <td className="p-2 border">{report.Category}</td>
              <td className="p-2 border">
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                  onClick={() => handleEditReport(report)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal DaisyUI */}
      {isModalOpen && (
        <dialog id="my_modal_4" className="modal" open>
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Editar Reporte</h3>
            <form onSubmit={handleSaveReport} className="space-y-2">
              <input
                type="text"
                placeholder="Nueva Severidad"
                value={updatedSeverity}
                onChange={(e) => setUpdatedSeverity(e.target.value)}
                className="w-full px-2 py-1 border rounded"
              />
              <input
                type="text"
                placeholder="Nueva Categoría"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
                className="w-full px-2 py-1 border rounded"
              />
              <input
                type="text"
                placeholder="Nuevo Username de Support"
                value={updatedSupportUsername}
                onChange={(e) => setUpdatedSupportUsername(e.target.value)}
                className="w-full px-2 py-1 border rounded"
              />
              <div className="modal-action">
                <button className="btn" onClick={closeModal}>
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white hover:bg-blue-700"
                >
                  Guardar Cambios
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
