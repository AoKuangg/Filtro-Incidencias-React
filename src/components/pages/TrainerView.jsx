import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVER = JSON.parse(import.meta.env.VITE_SERVER);
export default function TrainerView(props) {
  const user = props.user;
  const token = localStorage.getItem("token");

  return <div>TrainerView</div>;
}
