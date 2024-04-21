import { AddUserModel, UserModel } from "@/domain/model/user";

export interface AddUser {
  add: (user: AddUserModel) => Promise<Omit<UserModel, "password">>;
}
