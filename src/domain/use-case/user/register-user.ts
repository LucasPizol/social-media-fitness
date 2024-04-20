import { UserModel, UserRegisterAttributes } from "@/domain/model/user";

export interface RegisterUser {
  register: (
    user: UserRegisterAttributes
  ) => Promise<UserModel & { token: string }>;
}
