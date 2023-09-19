import { Router } from "express";
import { limitRequest } from "../../config/limit.js";
import Camper from "./routes/camper.routes.js";

const v1Routers = Router();
v1Routers.use(limitRequest());



export default v1Routers;
