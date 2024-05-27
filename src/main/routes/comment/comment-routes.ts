import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { addCommentFactory } from "@/main/factories/comment/add-comment";
import { loadCommentFactory } from "@/main/factories/comment/load-comment";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

const commentRoutes = Router();

commentRoutes.post("/", ensureAuthMiddleware, adaptRoute(addCommentFactory()));
commentRoutes.get("/", ensureAuthMiddleware, adaptRoute(loadCommentFactory()));

export { commentRoutes };
