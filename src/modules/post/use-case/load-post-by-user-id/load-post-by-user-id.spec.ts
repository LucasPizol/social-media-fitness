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
    // loadPostByUserIdRepository.loadByUserId.mockResolvedValue([
    //   {
    //     id: 0,
    //     content: "any_content",
    //     userId: 0,
    //     createdAt: fakeDate,
    //     updatedAt: fakeDate,
    //     disabledAt: null,
    //     isActive: true,
    //     likes: [],
    //   },
    // ]);

    const response = await sut.loadByUserId(1);

    expect(loadPostByUserIdRepository.loadByUserId).toHaveBeenCalledTimes(1);
    expect(response).toEqual([
      {
        id: 0,
        content: "any_content",
        userId: 0,
        createdAt: fakeDate,
        updatedAt: fakeDate,
        disabledAt: null,
        isDisabled: true,
        likes: [],
      },
    ]);
  });

  it("should return null if user was not found", async () => {
    loadPostByUserIdRepository.loadByUserId.mockResolvedValue([]);

    const response = await sut.loadByUserId(1);

    expect(response.length).toBe(0);
  });
});
