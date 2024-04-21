import { Router } from "express";
import { exerciseRoutes } from "./exercise/exercise-routes";
import { userRoutes } from "./user/user-routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/exercise", exerciseRoutes);

export { routes };
