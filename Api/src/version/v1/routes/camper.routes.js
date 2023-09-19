import { Router } from "express";
import * as CamperConsulta from "../../../controller/camperController.js"
import { validationSchema } from "../../../helpers/validatorschema.js";

const Camper = Router();

Camper.use("/NewReport",CamperConsulta.CreateIncident);

export default Camper;