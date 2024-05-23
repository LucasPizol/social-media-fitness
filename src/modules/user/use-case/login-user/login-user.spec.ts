import { MockProxy, mock } from "jest-mock-extended";
import { LoginUserUseCase } from "./login-user";
import {
  AddUser,
  BcryptCompareProtocols,
  JWTSignProtocols,
  LoadUserByEmail,
  LoginUser,
} from "./login-user-protocols";

describe("Lohin User Use Case", () => {
  let sut: LoginUser;
  let addUserUseCase: MockProxy<AddUser>;
  let loadUserByEmailUseCase: MockProxy<LoadUserByEmail>;
  let bcryptHelper: MockProxy<BcryptCompareProtocols>;
  let jwtHelper: MockProxy<JWTSignProtocols>;

  beforeEach(() => {
    addUserUseCase = mock();
    loadUserByEmailUseCase = mock();
    bcryptHelper = mock();
    jwtHelper = mock();
    sut = new LoginUserUseCase(
      addUserUseCase,
      loadUserByEmailUseCase,
      bcryptHelper,
      jwtHelper
    );
  });

  const fakeDate = new Date();

  it("should register an user on success", async () => {});

  it("should not login a user because it already exists", async () => {
    loadUserByEmailUseCase.loadByEmail.mockResolvedValue({
      id: 0,
      name: "any_name",
      email: "any_email",
      password: "any_password",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      avatar: "any_avatar",
    });
    bcryptHelper.compare.mockResolvedValue(true);
    jwtHelper.sign.mockReturnValue("any_token");

    expect(await sut.login("any_name", "any_password")).toEqual({
      id: 0,
      name: "any_name",
      email: "any_email",
      avatar: undefined,
      token: "any_token",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      password: undefined,
    });
  });

  it("should not login a user because it does not exists", async () => {
    loadUserByEmailUseCase.loadByEmail.mockResolvedValue(null);
    try {
      expect(await sut.login("any_name", "any_password")).toEqual(null);
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual("Invalid Credentials");
    }
  });

  it("should not login a user because it the password is incorrect", async () => {
    loadUserByEmailUseCase.loadByEmail.mockResolvedValue({
      id: 0,
      name: "any_name",
      email: "any_email",
      password: "any_other_password",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      avatar: "any_avatar",
    });
    bcryptHelper.compare.mockResolvedValue(false);

    try {
      expect(await sut.login("any_name", "any_password")).toEqual(null);
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual("Invalid Credentials");
    }
  });
});
