// import "dotenv/config";
import { SignJWT, jwtVerify } from "jose";
import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "VITE")
const JWT_KEY = env.VITE_JWT_KEY

export const GenerateToken = async (info) => {
  const { _id, Username, Email, Rol } = info[0];
  let infoToken = {
    id: _id,
    Username: Username,
    Email: Email,
    Rol: Rol,
  };
  const encoder = new TextEncoder();
  const jwt = await new SignJWT(infoToken)
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(encoder.encode(JWT_KEY));

  return jwt;
};

export const ValidateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).send({ token: "Damaged token or invalid token" });
  try {
    const encoder = new TextEncoder();
    req.auth = await jwtVerify(
      authorization,
      encoder.encode(JWT_KEY)
    );
    next();
  } catch (error) {
    res.status(401).send({
      status: 401,
      errorInfo: { message: "Validation error", error: error },
    });
  }
};
