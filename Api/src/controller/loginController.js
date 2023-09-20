import { GenerateToken } from "../jwt/token.js";
import * as LoginService from "../services/login.service.js";

export const SignIn = async (req, res) => {
  try {
    let data = await LoginService.SignIn(req.body);
    if (!data.length) {
      res.status(404).json({
        status: 404,
        message: "Not found",
        data: req.body.Email,
      });
    } else {
      let jwt = await GenerateToken(data);
      res.status(200).json({
        status: 200,
        message: "Found",
        data: data[0],
        auth: jwt,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error",
        error: error.message,
      },
    });
  }
};

export const singUp = async (req, res) => {
  const { Username, Email, Password, Rol } = req.body;
  try {
    let user = await LoginService.SignUp(req.body);

    if (user) {
      let data = await LoginService.SignIn({ Email, Password });
      let jwt = await GenerateToken(data);
      res.status(200).json({
        status: 200,
        message: "OK, registered",
        data: data[0],
        auth: jwt,
      });
    } else {
      res.status(409).json({ status: 409, message: "user exists already" });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error",
        error: error.message,
      },
    });
  }
};