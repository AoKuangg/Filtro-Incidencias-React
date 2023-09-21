import { check } from "express-validator";

export const signinSchema = [
  check("Password")
    .notEmpty()
    .isString()
    .withMessage("Please enter your password"),
  check("Email")
    .notEmpty()
    .isString()
    .withMessage("Please enter your email address"),
];

export const signupSchema = [
  check("Username")
    .notEmpty()
    .isString()
    .withMessage("Please enter your username"),
  check("Password")
    .notEmpty()
    .isString()
    .withMessage("Please enter your password"),
  check("Email")
    .notEmpty()
    .isString()
    .withMessage("Please enter your email"),
  check("Rol")
    .notEmpty()
    .isString()
    .withMessage("Please enter your role"),
];
