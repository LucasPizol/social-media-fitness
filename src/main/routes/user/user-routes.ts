import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { ServerRoutesProtocolAdapter } from "@/main/adapters/server-routes-adapter-protocol";
import { loadUserByIdFactory } from "@/main/factories/user/load-user-by-id";
import { loginUserFactory } from "@/main/factories/user/login-user";
import { registerUserFactory } from "@/main/factories/user/register-user";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/register", adaptRoute(registerUserFactory()));
userRoutes.post("/login", adaptRoute(loginUserFactory()));
userRoutes.get("/:id", adaptRoute(loadUserByIdFactory()));
userRoutes.get(
  "/",
  ensureAuthMiddleware,
  (req: ServerRoutesProtocolAdapter, res) => {
    return res.status(200).send(req.user);
  }
);

export { userRoutes };
