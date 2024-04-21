import { adaptRoute } from "@/main/adapters/server-routes-adapter";
import { registerUserFactory } from "@/main/factories/user/register-user";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/", adaptRoute(registerUserFactory()));

export { userRoutes };
