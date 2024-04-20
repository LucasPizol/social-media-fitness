import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { registerUserFactory } from "@/main/factories/user/register-user";
import { HttpRequest } from "@/main/protocols/http";
import { ensureAuthMiddleware } from "@/middleware/auth-middleware";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/", adaptRoute(registerUserFactory()));
userRoutes.get("/", ensureAuthMiddleware, (req: HttpRequest, res) => {
  res.send(req.user);
});

export { userRoutes };
