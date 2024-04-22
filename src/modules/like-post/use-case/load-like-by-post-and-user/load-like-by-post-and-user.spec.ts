import { LoadLikeByPostAndUserRepository } from "@/domain/repository/like-post/load-like-by-post-and-user-repository";
import { MockProxy, mock } from "jest-mock-extended";
import { LoadLikeByPostAndUser } from "../like-post/like-post-protocols";
import { LoadLikeByPostAndUserUseCase } from "./load-like-by-post-and-user";

describe("Load Like By Post And User Use Case", () => {
  let sut: LoadLikeByPostAndUser;
  let loadLikeByPostAndUserRepository: MockProxy<LoadLikeByPostAndUserRepository>;

  beforeEach(() => {
    loadLikeByPostAndUserRepository = mock();

    sut = new LoadLikeByPostAndUserUseCase(loadLikeByPostAndUserRepository);
  });

  it("should be able to load like by post and user", async () => {
    loadLikeByPostAndUserRepository.load.mockResolvedValue({
      id: "any_id",
      postId: "any_post_id",
      userId: "any_post_id",
    });

    const response = await sut.load("any_post_id", "any_user_id");

    expect(response).toEqual({
      id: "any_id",
      postId: "any_post_id",
      userId: "any_post_id",
    });
  });

  it("should return null if there is no like", async () => {
    loadLikeByPostAndUserRepository.load.mockResolvedValue(null);

    const response = await sut.load("any_post_id", "any_user_id");

    expect(response).toBeNull();
  });
});
