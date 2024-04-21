import { UserModel } from "@/domain/model/user";

export interface LoginUser {
  login: (
    email: string,
    password: string
  ) => Promise<Omit<UserModel, "password"> & { token: string }>;
}
