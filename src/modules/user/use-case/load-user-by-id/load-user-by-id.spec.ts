import { MockProxy, mock } from "jest-mock-extended";
import { LoadUserByIdUseCase } from "./load-user-by-id";
import {
  LoadUserById,
  LoadUserByIdRepository,
} from "./load-user-by-id-protocols";

describe("Load User By Id Use Case", () => {
  let sut: LoadUserById;
  let loadUserByIdRepository: MockProxy<LoadUserByIdRepository>;

  beforeEach(() => {
    loadUserByIdRepository = mock();
    sut = new LoadUserByIdUseCase(loadUserByIdRepository);
  });

  it("should be able to load user by id", async () => {
    loadUserByIdRepository.loadById.mockResolvedValue({
      id: 0,
      name: "any_name",
      avatar: "any_avatar",
    });

    const response = await sut.loadById(0);

    expect(loadUserByIdRepository.loadById).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      id: 0,
      name: "any_name",
      avatar: "any_avatar",
    });
  });
});
