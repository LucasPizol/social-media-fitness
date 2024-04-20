import { UserModel, UserRegisterAttributes } from "@/domain/model/user";
import { AddUser } from "@/domain/use-case/user/add-user";
import { LoadUserByEmail } from "@/domain/use-case/user/load-user-by-email";
import { RegisterUser } from "@/domain/use-case/user/register-user";
import { BcryptHasherProtocols } from "@/services/protocols/bcrypt/bcrypt-protocols";
import { JWTSignProtocols } from "@/services/protocols/jwt/jwt-protocols";

export class RegisterUserUseCase implements RegisterUser {
  private readonly addUserUseCase: AddUser;
  private readonly loadUserByEmailUseCase: LoadUserByEmail;
  private readonly bcryptHelper: BcryptHasherProtocols;
  private readonly jwtHelper: JWTSignProtocols;

  constructor(
    addUserUseCase: AddUser,
    loadUserByEmailUseCase: LoadUserByEmail,
    bcryptHelper: BcryptHasherProtocols,
    jwtHelper: JWTSignProtocols
  ) {
    this.addUserUseCase = addUserUseCase;
    this.loadUserByEmailUseCase = loadUserByEmailUseCase;
    this.bcryptHelper = bcryptHelper;
    this.jwtHelper = jwtHelper;
  }

  async register(
    user: UserRegisterAttributes
  ): Promise<UserModel & { token: string }> {
    const userExists = await this.loadUserByEmailUseCase.loadByEmail(
      user.email
    );

    if (userExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await this.bcryptHelper.hash(user.password);

    const userCreated = await this.addUserUseCase.add({
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
