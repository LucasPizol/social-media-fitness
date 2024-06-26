import { MockProxy, mock } from "jest-mock-extended";
import { LoadUserByEmailUseCase } from "./load-user-by-email";
import {
  LoadUserByEmail,
  LoadUserByEmailRepository,
} from "./load-user-by-email-protocols";

describe("Load User By Email Use Case", () => {
  let sut: LoadUserByEmail;
  let loadUserByEmailRepository: MockProxy<LoadUserByEmailRepository>;
  const fakeDate = new Date();

  beforeEach(() => {
    loadUserByEmailRepository = mock();
    sut = new LoadUserByEmailUseCase(loadUserByEmailRepository);
  });

  it("should return an user on success", async () => {
    loadUserByEmailRepository.loadByEmail.mockResolvedValue({
      id: 0,
      name: "any_name",
      email: "any_email",
      password: "any_password",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      avatar: "any_avatar",
    });

    const user = await sut.loadByEmail("any_email");

    expect(loadUserByEmailRepository.loadByEmail).toHaveBeenCalledTimes(1);
    expect(user).toEqual({
      id: 0,
      name: "any_name",
      email: "any_email",
      password: "any_password",
      avatar: "any_avatar",
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });
  });
});
