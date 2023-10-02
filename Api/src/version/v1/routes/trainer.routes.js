import { Router } from "express";
import * as TrainerConsulta from "../../../controller/trainerController.js";
import { validationSchema } from "../../../helpers/validatorschema.js";

const Trainer = Router();

Trainer.get("/", TrainerConsulta.GetAllReports)
  .get("/site/:Site", TrainerConsulta.GetReportsbySite)
  .get("/camper/:Camper", TrainerConsulta.GetReportByCamper)
  .get("/date/:Date", TrainerConsulta.GetReportByDateOfIncident)
  .get("/severity/:Severity", TrainerConsulta.GetReportBySeverity)
  .get("/category/:Category", TrainerConsulta.GetReportByCategory)
  .put("/:Tittle", TrainerConsulta.ModifyReport);

export default Trainer;