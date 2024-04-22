import { MockProxy, mock } from "jest-mock-extended";
import { UnlikePostUseCase } from "./unlike-post";
import { UnlikePost, UnlikePostRepository } from "./unlike-post-protocols";

describe("Unlike Post Use Case", () => {
  let sut: UnlikePost;
  let unlikePostRepository: MockProxy<UnlikePostRepository>;

  beforeEach(() => {
    unlikePostRepository = mock();

    sut = new UnlikePostUseCase(unlikePostRepository);
  });

  it("should be able to unlike a post", async () => {
    const data = {
      postId: "post-id",
      userId: "user-id",
    };

    unlikePostRepository.unlike.mockResolvedValue();

    const response = await sut.unlike(data);

    expect(response).toBeUndefined();
  });
});
