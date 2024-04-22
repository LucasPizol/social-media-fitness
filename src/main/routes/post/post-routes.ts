import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { addPostFactory } from "@/main/factories/post/add-post";
import { loadPostByUserIdFactory } from "@/main/factories/post/load-post";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

const postRoutes = Router();

postRoutes.post("/", ensureAuthMiddleware, adaptRoute(addPostFactory()));
postRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  adaptRoute(loadPostByUserIdFactory())
);

export { postRoutes };
