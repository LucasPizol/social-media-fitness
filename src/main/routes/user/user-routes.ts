import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { loadUserByIdFactory } from "@/main/factories/user/load-user-by-id";
import { loginUserFactory } from "@/main/factories/user/login-user";
import { registerUserFactory } from "@/main/factories/user/register-user";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/register", adaptRoute(registerUserFactory()));
userRoutes.post("/login", adaptRoute(loginUserFactory()));
userRoutes.get("/:id", adaptRoute(loadUserByIdFactory()));

export { userRoutes };
