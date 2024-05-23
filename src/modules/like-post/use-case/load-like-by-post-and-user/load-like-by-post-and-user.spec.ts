import { LoadLikeByPostRepository } from "@/domain/repository/like/load-like-by-post-repository";
import { MockProxy, mock } from "jest-mock-extended";
import { LoadLikeByPost } from "../like-post/like-post-protocols";
import { LoadLikeByPostAndUserUseCase } from "./load-like-by-post-and-user";

describe("Load Like By Post And User Use Case", () => {
  let sut: LoadLikeByPost;
  let loadLikeByPostAndUserRepository: MockProxy<LoadLikeByPostRepository>;

  beforeEach(() => {
    loadLikeByPostAndUserRepository = mock();

    sut = new LoadLikeByPostAndUserUseCase(loadLikeByPostAndUserRepository);
  });

  it("should be able to load like by post and user", async () => {
    loadLikeByPostAndUserRepository.loadLikeByPost.mockResolvedValue([
      {
        id: 0,
        postId: 0,
        likedById: 0,
      },
    ]);

    const response = await sut.loadLikeByPost(0);

    expect(response).toEqual([
      {
        id: 0,
        postId: 0,
        likedById: 0,
      },
    ]);
  });
});
