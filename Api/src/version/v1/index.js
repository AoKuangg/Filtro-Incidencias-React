import { Router } from "express";
import { limitRequest } from "../../config/limit.js";
import Camper from "./routes/camper.routes.js";
import loginApp from "./routes/login.routes.js";
import Trainer from "./routes/trainer.routes.js";
import Support from "./routes/support.routes.js";

const v1Routers = Router();
v1Routers.use(limitRequest());

v1Routers.use("/auth",loginApp);
v1Routers.use("/CamperView",Camper);
v1Routers.use("/TrainerView",Trainer);
v1Routers.use("/SupportView",Support)

export default v1Routers;
