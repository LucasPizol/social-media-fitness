import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { addPostFactory } from "@/main/factories/post/add-post";
import { disablePostByIdFactory } from "@/main/factories/post/disable-post-by-id";
import { loadPostByUserIdFactory } from "@/main/factories/post/load-posts-by-user-id";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

const postRoutes = Router();

postRoutes.post("/", ensureAuthMiddleware, adaptRoute(addPostFactory()));
postRoutes.get("/:id", adaptRoute(loadPostByUserIdFactory()));
postRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  adaptRoute(disablePostByIdFactory())
);

export { postRoutes };
