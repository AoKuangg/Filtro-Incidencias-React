console.clear();
// import "dotenv/config";
import {  loadEnv } from "vite";
import cors from "cors";
import Express from "express";
import routesVersioning from "express-routes-versioning";
import v1Routers from "./src/version/v1/index.js";


const env = loadEnv("development", process.cwd(), "VITE")
const json = JSON.parse(env.VITE_SERVER)
const app = Express();
const version = routesVersioning();
app.use(cors());
app.use(Express.json());

app.use(
  "/",
  version({
    "~1.0.0": v1Routers,
  })
);

const config = {
  port: json.port,
  hostname: json.hostname,
};
app.listen(config, () => {
  console.log(`http://${config.hostname}:${config.port}`);
});
