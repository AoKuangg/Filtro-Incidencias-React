import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SERVER = JSON.parse(import.meta.env.VITE_SERVER);
export default function LogIn() {
  let redirect = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //FETCH CONFIG METHODS
  const config = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };

  //API REQUEST
  const Fetch = async (event) => {
    event.preventDefault();

    config.method = "POST";
    config.body = JSON.stringify({ Email, Password });
    try {
      let result = await (
        await fetch(
          `http://${SERVER.hostname}:${SERVER.port}/auth/signIn`,
          config
        )
      ).json();

      //IF USER NOT FOUND
      if (result.status == 200) {
        localStorage.setItem("token", result.auth);
        redirect("/home", {
          state: {
            user: result.data,
          },
        });
      } else {
        toast.error("🦄 User no registered!", {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden dark:bg-slate-800">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-xs md:max-w-lg lg:max-w-xl dark:bg-slate-700">
          <h1 className="text-3xl font-semibold text-center text-green-600 underline">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={Fetch} id="formLogIn">
            <div className="mb-2">
              <label className="block text-sm font-semibold dark:text-gray-800">
                Email
              </label>
              <input
                name="email"
                value={Email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 dark:text-blue-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                name="password"
                value={Password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link
              to="/signUp"
              className="block text-xs text-green-600 hover:underline"
            >
              SignUp
            </Link>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
                Login
              </button>
            </div>
          </form>
        </div>
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
        theme="colored"
      />
    </>
  );
}
