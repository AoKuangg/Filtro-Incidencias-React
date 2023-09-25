import { check } from "express-validator";

export const incidentSchema = [
  check("Site")
    .isString()
    .notEmpty()
    .withMessage("Site is required"),
  check("Tittle")
    .isString()
    .notEmpty()
    .withMessage("Tittle is required"),
  check("Description")
    .isString()
    .notEmpty()
    .withMessage("Description is required"),
  check("DateOfIncident")
    .isString()
    .notEmpty()
    .withMessage("Date of incident is required"),
];
