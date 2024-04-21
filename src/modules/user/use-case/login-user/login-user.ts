import {
  AddUser,
  BcryptCompareProtocols,
  JWTSignProtocols,
  LoadUserByEmail,
  LoginUser,
} from "./login-user-protocols";

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

    if (!user) throw new Error("Invalid Credentials");

    const isValidPassword = await this.bcryptHelper.compare(
      password,
      user.password
    );

    if (!isValidPassword) throw new Error("Invalid Credentials");

    const token = this.jwtHelper.sign({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    });

    return { ...user, password: undefined, token };
  }
}
