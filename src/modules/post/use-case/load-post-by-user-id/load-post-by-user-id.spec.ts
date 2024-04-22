import { MockProxy, mock } from "jest-mock-extended";
import { LoadPostByUserIdUseCase } from "./load-post-by-user-id";
import {
  LoadPostByUserId,
  LoadPostByUserIdRepository,
} from "./load-post-by-user-id-protocols";

describe("Load Post By User Id Use Case", () => {
  let sut: LoadPostByUserId;
  let loadPostByUserIdRepository: MockProxy<LoadPostByUserIdRepository>;

  const fakeDate = new Date();

  beforeEach(() => {
    loadPostByUserIdRepository = mock();

    sut = new LoadPostByUserIdUseCase(loadPostByUserIdRepository);
  });

  it("should be able to load post by user id", async () => {
    loadPostByUserIdRepository.loadByUserId.mockResolvedValue([
      {
        id: "any_id",
        content: "any_content",
        userId: "any_user_id",
        createdAt: fakeDate,
        updatedAt: fakeDate,
        disabledAt: null,
        isActive: true,
        likes: [],
      },
    ]);

    const response = await sut.loadByUserId("any_user_id");

    expect(loadPostByUserIdRepository.loadByUserId).toHaveBeenCalledTimes(1);
    expect(response).toEqual([
      {
        id: "any_id",
        content: "any_content",
        userId: "any_user_id",
        createdAt: fakeDate,
        updatedAt: fakeDate,
        disabledAt: null,
        isActive: true,
        likes: [],
      },
    ]);
  });

  it("should return null if user was not found", async () => {
    loadPostByUserIdRepository.loadByUserId.mockResolvedValue(null);

    const response = await sut.loadByUserId("any_user_id");

    expect(response).toBeNull();
  });
});
