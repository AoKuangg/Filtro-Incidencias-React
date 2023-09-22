import { Router } from "express";
import * as SupportConsulta from "../../../controller/supportController.js";
import { validationSchema } from "../../../helpers/validatorschema";

const Support = Router();

Support.get("/:Support", SupportConsulta.GetReportsBySupport).put(
  "/:Tittle",
  SupportConsulta.ModifyReports
);

export default Support;
