import { check } from "express-validator";

export const modifyReport = [
    check("Severity")
      .isString()
      .notEmpty()
      .withMessage("Enter a severity"),
    check("State")
      .isString()
      .notEmpty()
      .withMessage("Enter a state"),
]