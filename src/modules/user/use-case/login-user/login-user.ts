import { LoginUser } from "@/domain/use-case/user/login-user";
import { AddUser } from "../add-user/add-user-protocols";
import { LoadUserByEmail } from "../load-user-by-email/load-user-by-email-protocols";
import {
  BcryptCompareProtocols,
  JWTSignProtocols,
} from "../register-user/register-user-protocols";

export class LoginUserUseCase implements LoginUser {
  private readonly addUserUseCase: AddUser;
  private readonly loadUserByEmailUseCase: LoadUserByEmail;
  private readonly bcryptHelper: BcryptCompareProtocols;
  private readonly jwtHelper: JWTSignProtocols;

  constructor(
    addUserUseCase: AddUser,
    loadUserByEmailUseCase: LoadUserByEmail,
    bcryptHelper: BcryptCompareProtocols,
    jwtHelper: JWTSignProtocols
  ) {
    this.addUserUseCase = addUserUseCase;
    this.loadUserByEmailUseCase = loadUserByEmailUseCase;
    this.bcryptHelper = bcryptHelper;
    this.jwtHelper = jwtHelper;
  }

  async login(email: string, password: string) {
    const user = await this.loadUserByEmailUseCase.loadByEmail(email);

    if (!user) throw new Error("User not found");

    const isValidPassword = await this.bcryptHelper.compare(
      password,
      user.password
    );

    if (!isValidPassword) throw new Error("Invalid password");

    const token = this.jwtHelper.sign({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    });

    const returnData = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      token,
    };

    return { ...returnData, token };
  }
}
