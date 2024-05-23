import { MockProxy, mock } from "jest-mock-extended";
import { UnlikePostUseCase } from "./unlike-post";
import { DisableLike, DisableLikeRepository } from "./unlike-post-protocols";

describe("Unlike Post Use Case", () => {
  let sut: DisableLike;
  let unlikePostRepository: MockProxy<DisableLikeRepository>;

  beforeEach(() => {
    unlikePostRepository = mock();

    sut = new UnlikePostUseCase(unlikePostRepository);
  });

  it("should be able to unlike a post", async () => {
    const data = {
      postId: 0,
      likedById: 0,
    };

    unlikePostRepository.unlike.mockResolvedValue();

    const response = await sut.unlike(data);

    expect(response).toBeUndefined();
  });
});
