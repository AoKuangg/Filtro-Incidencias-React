import { Router } from "express";
import * as TrainerConsulta from "../../../controller/trainerController.js";
import { validationSchema } from "../../../helpers/validatorschema.js";

const Trainer = Router();

Trainer.get("/", TrainerConsulta.GetAllReports)
  .get("/site", TrainerConsulta.GetReportsbySite)
  .get("/camper", TrainerConsulta.GetReportByCamper)
  .get("/date", TrainerConsulta.GetReportByDateOfIncident)
  .get("/severity", TrainerConsulta.GetReportBySeverity)
  .get("/category", TrainerConsulta.GetReportByCategory)
  .put("/", TrainerConsulta.ModifyReport);

export default Trainer;