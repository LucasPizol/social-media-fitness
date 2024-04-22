import { LoadUserByIdRepository } from "@/domain/repository/user/load-user-by-id-repository";
import { LoadUserById } from "@/domain/use-case/user/load-user-by-id";
import { MockProxy, mock } from "jest-mock-extended";
import { LoadUserByIdUseCase } from "./load-user-by-id";

describe("Load User By Id Use Case", () => {
  let sut: LoadUserById;
  let loadUserByIdRepository: MockProxy<LoadUserByIdRepository>;

  beforeEach(() => {
    loadUserByIdRepository = mock();
    sut = new LoadUserByIdUseCase(loadUserByIdRepository);
  });

  it("should be able to load user by id", async () => {
    loadUserByIdRepository.loadById.mockResolvedValue({
      id: "any_id",
      name: "any_name",
      avatar: "any_avatar",
    });

    const response = await sut.loadById("any_id");

    expect(loadUserByIdRepository.loadById).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      id: "any_id",
      name: "any_name",
      avatar: "any_avatar",
    });
  });
});
