import { Router } from "express";
import { exerciseRoutes } from "./exercise/exercise-routes";
import { likePostRoutes } from "./like-post/like-post-routes";
import { postRoutes } from "./post/post-routes";
import { userRoutes } from "./user/user-routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/exercise", exerciseRoutes);
routes.use("/post", postRoutes);
routes.use("/like-post", likePostRoutes);

export { routes };
