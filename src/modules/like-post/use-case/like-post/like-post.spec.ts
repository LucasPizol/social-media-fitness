import { MockProxy, mock } from "jest-mock-extended";
import { LikePostUseCase } from "./like-post";
import {
  LikePost,
  LikePostRepository,
  LoadLikeByPostAndUser,
} from "./like-post-protocols";

describe("Like Post Use Case", () => {
  let sut: LikePost;
  let likePostRepository: MockProxy<LikePostRepository>;
  let loadLikeByPostAndUserUseCase: MockProxy<LoadLikeByPostAndUser>;

  beforeEach(() => {
    likePostRepository = mock();
    loadLikeByPostAndUserUseCase = mock();
    sut = new LikePostUseCase(likePostRepository, loadLikeByPostAndUserUseCase);
  });

  it("should be able to like a post", async () => {
    likePostRepository.like.mockResolvedValue({} as any);
    loadLikeByPostAndUserUseCase.load.mockResolvedValue(null);
    const result = await sut.like({
      postId: "any_post_id",
      userId: "any_user_id",
    });
    expect(result).toEqual({});
  });
});