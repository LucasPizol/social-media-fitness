import { LoadPostRepository } from "@/domain/repository/post/load-post-repository";
import { LoadPost } from "@/domain/use-case/post/load-post";
import { MockProxy, mock } from "jest-mock-extended";
import { LoadPostUseCase } from "./load-post";

describe("Load Post By User Id Use Case", () => {
  let sut: LoadPost;
  let loadPostByUserIdRepository: MockProxy<LoadPostRepository>;

  const fakeDate = new Date();

  beforeEach(() => {
    loadPostByUserIdRepository = mock();

    sut = new LoadPostUseCase(loadPostByUserIdRepository);
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

    const response = await sut.load(1);

    expect(loadPostByUserIdRepository.load).toHaveBeenCalledTimes(1);
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
    loadPostByUserIdRepository.load.mockResolvedValue([]);

    const response = await sut.load(1);

    expect(response.length).toBe(0);
  });
});
