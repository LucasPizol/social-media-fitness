import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { addPostFactory } from "@/main/factories/post/add-post";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

const postRoutes = Router();

postRoutes.post("/", ensureAuthMiddleware, adaptRoute(addPostFactory()));

export { postRoutes };
