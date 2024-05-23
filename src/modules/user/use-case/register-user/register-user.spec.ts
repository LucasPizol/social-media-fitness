import { MockProxy, mock } from "jest-mock-extended";
import { RegisterUserUseCase } from "./register-user";
import {
  AddUser,
  BcryptHasherProtocols,
  JWTSignProtocols,
  LoadUserByEmail,
  RegisterUser,
} from "./register-user-protocols";

describe("Register User Use Case", () => {
  let sut: RegisterUser;
  let addUserUseCase: MockProxy<AddUser>;
  let loadUserByEmailUseCase: MockProxy<LoadUserByEmail>;
  let bcryptHelper: MockProxy<BcryptHasherProtocols>;
  let jwtHelper: MockProxy<JWTSignProtocols>;

  beforeEach(() => {
    addUserUseCase = mock();
    loadUserByEmailUseCase = mock();
    bcryptHelper = mock();
    jwtHelper = mock();
    sut = new RegisterUserUseCase(
      addUserUseCase,
      loadUserByEmailUseCase,
      bcryptHelper,
      jwtHelper
    );
  });

  const fakeDate = new Date();

  const fakeUser = {
    id: 0,
    name: "any_name",
    email: "any_email",
    createdAt: fakeDate,
    updatedAt: fakeDate,
    avatar: "any_avatar",
  };

  const fakeAddUser = {
    name: "any_name",
    email: "any_email",
    password: "any_password",
    avatar: "any_avatar",
  };

  it("should register an user on success", async () => {
    addUserUseCase.add.mockResolvedValue(fakeUser);
    loadUserByEmailUseCase.loadByEmail.mockResolvedValue(null);
    bcryptHelper.hash.mockResolvedValue("hashed_password");
    jwtHelper.sign.mockReturnValue("any_token");

    const response = await sut.register(fakeAddUser);

    expect(response).toEqual({
      id: 0,
      name: "any_name",
      email: "any_email",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      token: "any_token",
    });
  });

  it("should not register a user because it already exists", async () => {
    loadUserByEmailUseCase.loadByEmail.mockResolvedValue({
      id: 0,
      name: "any_name",
      email: "any_email",
      password: "any_password",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      avatar: "any_avatar",
    });

    try {
      expect(await sut.register(fakeAddUser)).toEqual(null);
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual("User already exists");
    }
  });
});
