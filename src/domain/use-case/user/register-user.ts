import { AddUserModel, UserModel } from "@/domain/model/user";

export interface RegisterUser {
  register: (user: AddUserModel) => Promise<UserModel & { token: string }>;
}
