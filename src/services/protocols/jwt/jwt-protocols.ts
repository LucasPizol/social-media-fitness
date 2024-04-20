export interface JWTSignProtocols {
  sign: (payload: string) => string;
}

export interface JWTVerifyProtocols {
  verify: <T>(token: string) => Promise<T | null>;
}
