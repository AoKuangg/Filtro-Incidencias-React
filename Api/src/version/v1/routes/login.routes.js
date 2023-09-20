import { Router } from "express";
import * as loginController from "../../../controller/loginController.js";
import { validationSchema } from "../../../helpers/validatorschema.js";
import { signinSchema, signupSchema } from "../../../middleware/LoginDTO.js";

const loginApp = Router();

loginApp
  .all("/signIn", validationSchema(signinSchema), loginController.SignIn)
  .post("/signUp", validationSchema(signupSchema), loginController.singUp);

export default loginApp;
