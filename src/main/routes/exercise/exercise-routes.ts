import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { addExerciseFactory } from "@/main/factories/exercise/add-exercise";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

const exerciseRoutes = Router();

exerciseRoutes.post(
  "/",
  ensureAuthMiddleware,
  adaptRoute(addExerciseFactory())
);

export { exerciseRoutes };
