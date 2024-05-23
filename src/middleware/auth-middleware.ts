import { UserModel } from "@/domain/model/user";
import { HttpRequest } from "@/protocols/http";
import { JWTHelper } from "@/services/implementations/jwt/jwt-helper";
import { NextFunction, Response } from "express";

export const ensureAuthMiddleware = async (
  req: HttpRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization)
      return res.status(401).send({ error: "Not authorized" });

    const [, token] = req.headers.authorization.split(" ");

    if (!token) return res.status(401).send({ error: "Not authorized" });
    const payload = await new JWTHelper().verify(token);

    if (!payload) return res.status(401).send({ error: "Not authorized" });
    req.user = payload as Pick<UserModel, "avatar" | "id" | "name" | "email">;

    next();
  } catch (error) {
    return res.status(500).send(error);
  }
};
