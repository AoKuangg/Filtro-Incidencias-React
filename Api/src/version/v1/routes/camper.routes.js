import { Router } from "express";
import * as CamperConsulta from "../../../controller/camperController.js"
import { validationSchema } from "../../../helpers/validatorschema.js";
import { incidentSchema } from "../../../middleware/IncidentDTO.js";

const Camper = Router();

Camper.use("/NewReport",validationSchema(incidentSchema),CamperConsulta.CreateIncident);

export default Camper;