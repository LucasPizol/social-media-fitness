import { UserModel, UserRegisterAttributes } from "@/domain/model/user";

export interface AddUser {
  add: (user: UserRegisterAttributes) => Promise<UserModel>;
}
