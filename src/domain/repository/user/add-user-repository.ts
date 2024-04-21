import { AddUserModel, UserModel } from "@/domain/model/user";

export interface AddUserRepository {
  add: (user: AddUserModel) => Promise<UserModel>;
}
