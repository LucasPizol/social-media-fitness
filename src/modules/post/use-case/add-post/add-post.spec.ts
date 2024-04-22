import { MockProxy, mock } from "jest-mock-extended";
import { AddPostUseCase } from "./add-post";
import { AddPost, AddPostRepository } from "./add-post-protocols";

describe("Add Post Use Case", () => {
  let sut: AddPost;
  let addPostRepository: MockProxy<AddPostRepository>;

  beforeEach(() => {
    addPostRepository = mock();
    sut = new AddPostUseCase(addPostRepository);
  });
  const fakeDate = new Date();

  it("should be able to add a post", async () => {
    addPostRepository.add.mockResolvedValue({
      id: "any_id",
      content: "any_content",
      userId: "any_user_id",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isActive: true,
    });

    const response = await sut.add({
      content: "any_content",
      userId: "any_user_id",
    });

    expect(addPostRepository.add).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      id: "any_id",
      content: "any_content",
      userId: "any_user_id",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isActive: true,
    });
  });
});
