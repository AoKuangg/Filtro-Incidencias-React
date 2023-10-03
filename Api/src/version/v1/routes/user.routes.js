import { Router } from "express";
import * as userConsulta from "../../../controller/UserController.js";

const User = Router();

User.get("/", userConsulta.GetAllSupports);

export default User;
