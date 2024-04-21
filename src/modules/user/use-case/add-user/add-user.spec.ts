import { MockProxy, mock } from "jest-mock-extended";
import { AddUserUseCase } from "./add-user";
import { AddUser, AddUserRepository } from "./add-user-protocols";

describe("Add Exercise Use Case", () => {
  let sut: AddUser;
  let addUserRepository: MockProxy<AddUserRepository>;

  beforeEach(() => {
    addUserRepository = mock();
    sut = new AddUserUseCase(addUserRepository);
  });

  const fakeDate = new Date();

  it("should return an user on success", async () => {
    addUserRepository.add.mockResolvedValue({
      id: "any_id",
      name: "any_name",
      email: "any_email",
      avatar: "any_avatar",
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });

    let response = await sut.add({
      name: "any_name",
      email: "any_email",
      password: "any_password",
    });

    expect(addUserRepository.add).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      id: "any_id",
      name: "any_name",
      email: "any_email",
      avatar: "any_avatar",
      createdAt: fakeDate,
      updatedAt: fakeDate,
    });
  });
});
