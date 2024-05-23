import env from "@/main/config/env";
import {
  JWTSignProtocols,
  JWTVerifyProtocols,
} from "@/services/protocols/jwt/jwt-protocols";

import jwt from "jsonwebtoken";

export class JWTHelper implements JWTSignProtocols, JWTVerifyProtocols {
  private readonly secret;

  constructor() {
    if (!env.jwtSecret) {
      throw new Error("JWT secret is not defined");
    }
    this.secret = env.jwtSecret;
  }
  sign(payload: any) {
    return jwt.sign(payload, this.secret, {
      expiresIn: "1d",
    });
  }
  verify<T>(token: string) {
    return new Promise<T | null>((res, rej) => {
      jwt.verify(token, this.secret, (err, decoded) => {
        if (err || !decoded) {
          return res(null);
        }

        return res(decoded as T);
      });
    });
  }
}
