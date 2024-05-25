import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { addPostFactory } from "@/main/factories/post/add-post";
import { disablePostByIdFactory } from "@/main/factories/post/disable-post-by-id";
import { loadPostFactory } from "@/main/factories/post/load-posts-by-user-id";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { MulterHelper } from "@/services/implementations/multer/multer-helper";
import { Router } from "express";

const postRoutes = Router();

const multerHelper = new MulterHelper("./tmp");

postRoutes.post(
  "/",
  ensureAuthMiddleware,
  multerHelper.handleMultipleFiles("files[]"),
  adaptRoute(addPostFactory())
);
postRoutes.get("/", adaptRoute(loadPostFactory()));
postRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  adaptRoute(disablePostByIdFactory())
);

export { postRoutes };
