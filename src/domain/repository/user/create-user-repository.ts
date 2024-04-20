import { UserModel, UserRegisterAttributes } from "@/domain/model/user";

export interface AddUserRepository {
  add: (user: UserRegisterAttributes) => Promise<UserModel>;
}
