export interface JWTSignProtocols {
  sign: (payload: any) => string;
}

export interface JWTVerifyProtocols {
  verify: <T>(token: string) => Promise<T | null>;
}
