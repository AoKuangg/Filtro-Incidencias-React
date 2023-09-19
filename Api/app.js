import "dotenv/config";
import Express from "express";
import routesVersioning from "express-routes-versioning";
import v1Routers from "./src/version/v1/index.js";

const app = Express();
const version = routesVersioning();
app.use(Express.json());

app.use(
  "/",
  version({
    "~1.0.0": v1Routers,
  })
);

const config = JSON.parse(process.env.SERVER);
app.listen(config, () => {
  console.log(`http://${config.hostname}:${config.port}/`);
});
