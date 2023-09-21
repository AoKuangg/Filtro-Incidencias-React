import { check } from "express-validator";

export const modifyReport = [
    check("Category")
      .isString()
      .notEmpty()
      .withMessage("Please enter a category"),
    check("Severity")
      .isString()
      .notEmpty()
      .withMessage("Enter a severity"),
    check("State")
      .isString()
      .notEmpty()
      .withMessage("Enter a state"),
]