import { UserModel, UserRegisterAttributes } from "@/domain/model/user";
import { AddUserRepository } from "@/domain/repository/user/create-user-repository";
import { AddUser } from "@/domain/use-case/user/add-user";

export class AddUserUseCase implements AddUser {
  private readonly addUserRepository: AddUserRepository;

  constructor(addUserRepository: AddUserRepository) {
    this.addUserRepository = addUserRepository;
  }

  add(user: UserRegisterAttributes): Promise<UserModel> {
    return this.addUserRepository.add(user);
  }
}
