import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { likePostFactory } from "@/main/factories/like-post/like-post";
import { unlikePostFactory } from "@/main/factories/like-post/unlike-post";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

export const likePostRoutes = Router();

likePostRoutes.patch(
  "/like/:id",
  ensureAuthMiddleware,
  adaptRoute(likePostFactory())
);

likePostRoutes.patch(
  "/unlike/:id",
  ensureAuthMiddleware,
  adaptRoute(unlikePostFactory())
);
