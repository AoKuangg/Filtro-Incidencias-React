import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SERVER = JSON.parse(import.meta.env.VITE_SERVER)
export default function Register() {
  let redirect = useNavigate();
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Rol, setRol] = useState("Camper");

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
    config.body = JSON.stringify({ Username, Email, Password, Rol });
    try {
      let result = await (
        await fetch(`http://${SERVER.hostname}:${SERVER.port}/auth/signUp`, config)
      ).json();

      if (result.status === 200) {
        localStorage.setItem("token", result.token);
        redirect("/home", {
          state: {
            user: {
              Username: result.data.Username,
              Email: result.data.Email,
              Rol: result.data.Rol,
            },
          },
        });
      } else {
        alert("Ha ocurrido un error al registrarse");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden dark:bg-slate-800">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md sm:max-w-xs md:max-w-lg lg:max-w-xl dark:bg-slate-700 ">
          <h1 className="text-3xl font-semibold text-center text-green-600 underline">
            Sign Up
          </h1>
          <form className="mt-6" onSubmit={Fetch} id="formSingUp">
            <div className="mb-2">
              <label className="block text-sm font-semibold dark:text-gray-800">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={Username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-4 py-2 mt-2 dark:text-blue-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold dark:text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={Email}
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
                type="password"
                name="password"
                value={Password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Rol
              </label>
              <select
                name="rol"
                value={Rol}
                onChange={(e) => setRol(e.target.value)}
                className="block w-full px-4 py-2 mt-2 dark:text-blue-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="Camper">Camper</option>
                <option value="Trainer">Trainer</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <Link
              to="/"
              className="block text-xs text-green-600 hover:underline"
            >
              SignIn
            </Link>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
                SingUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
