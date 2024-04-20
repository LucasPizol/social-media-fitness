import { UserModel, UserRegisterAttributes } from "@/domain/model/user";
import { AddUserRepository } from "@/domain/repository/user/create-user-repository";
import { RegisterUser } from "@/domain/use-case/user/register-user";
import { BcryptHasherProtocols } from "@/services/protocols/bcrypt/bcrypt-protocols";
import { JWTSignProtocols } from "@/services/protocols/jwt/jwt-protocols";

export class RegisterUserUseCase implements RegisterUser {
  private readonly addUserRepository: AddUserRepository;
  private readonly bcryptHelper: BcryptHasherProtocols;
  private readonly jwtHelper: JWTSignProtocols;

  constructor(
    addUserRepository: AddUserRepository,
    bcryptHelper: BcryptHasherProtocols,
    jwtHelper: JWTSignProtocols
  ) {
    this.addUserRepository = addUserRepository;
    this.bcryptHelper = bcryptHelper;
    this.jwtHelper = jwtHelper;
  }

  async register(
    user: UserRegisterAttributes
  ): Promise<UserModel & { token: string }> {
    const hashedPassword = await this.bcryptHelper.hash(user.password);

    const userCreated = await this.addUserRepository.add({
      ...user,
      password: hashedPassword,
    });

    const token = this.jwtHelper.sign({
      id: userCreated.id,
      name: userCreated.name,
      email: userCreated.email,
      avatar: userCreated.avatar,
    });

    return { ...userCreated, token };
  }
}
