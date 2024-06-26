import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { addExerciseFactory } from "@/main/factories/exercise/add-exercise";
import { disableExerciseByIdFactory } from "@/main/factories/exercise/disable-exercise-by-id";
import { loadExerciseFactory } from "@/main/factories/exercise/load-exercise";
import { updateExerciseFactory } from "@/main/factories/exercise/update-exercise-by-id";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

const exerciseRoutes = Router();

exerciseRoutes.post(
  "/",
  ensureAuthMiddleware,
  adaptRoute(addExerciseFactory())
);

exerciseRoutes.get(
  "/",
  ensureAuthMiddleware,
  adaptRoute(loadExerciseFactory())
);

exerciseRoutes.put(
  "/:id",
  ensureAuthMiddleware,
  adaptRoute(updateExerciseFactory())
);

exerciseRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  adaptRoute(disableExerciseByIdFactory())
);

export { exerciseRoutes };
