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
    id: "any_id",
    name: "any_name",
    email: "any_email",
    password: "any_password",
    createdAt: fakeDate,
    updatedAt: fakeDate,
  };

  it("should register an user on success", async () => {
    addUserUseCase.add.mockResolvedValue({
      ...fakeUser,
      password: "hashed_password",
    });
    loadUserByEmailUseCase.loadByEmail.mockResolvedValue(null);
    bcryptHelper.hash.mockResolvedValue("hashed_password");
    jwtHelper.sign.mockReturnValue("any_token");

    const fakeAddUser = {
      name: "any_name",
      email: "any_email",
      password: "any_password",
    };

    const response = await sut.register(fakeAddUser);
    expect(response.password).not.toEqual(fakeAddUser.password);
    expect(response).toEqual({
      id: "any_id",
      name: "any_name",
      email: "any_email",
      password: "hashed_password",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      token: "any_token",
    });
  });

  it("should not register a user because it already exists", async () => {
    loadUserByEmailUseCase.loadByEmail.mockResolvedValue({
      id: "any_id",
      name: "any_name",
      email: "any_email",
      password: "any_password",
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });

    try {
      expect(await sut.register(fakeUser)).toEqual(null);
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual("User already exists");
    }
  });
});
