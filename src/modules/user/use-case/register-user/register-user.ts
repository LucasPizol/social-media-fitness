import {
  AddUser,
  AddUserModel,
  BcryptHasherProtocols,
  JWTSignProtocols,
  LoadUserByEmail,
  RegisterUser,
  UserModel,
} from "./register-user-protocols";

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
    user: AddUserModel
  ): Promise<Omit<UserModel, "password"> & { token: string }> {
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
