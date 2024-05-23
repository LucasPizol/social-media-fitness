import { MockProxy, mock } from "jest-mock-extended";
import { LikePostUseCase } from "./like-post";
import { AddLike, AddLikeRepository } from "./like-post-protocols";

describe("Like Post Use Case", () => {
  let sut: AddLike;
  let likePostRepository: MockProxy<AddLikeRepository>;

  beforeEach(() => {
    likePostRepository = mock();
    sut = new LikePostUseCase(likePostRepository);
  });

  it("should be able to like a post", async () => {
    likePostRepository.like.mockResolvedValue({} as any);
    const result = await sut.like({
      postId: 0,
      likedById: 0,
    });
    expect(result).toEqual({});
  });
});
