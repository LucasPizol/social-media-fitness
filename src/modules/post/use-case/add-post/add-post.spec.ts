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
      id: 0,
      content: "any_content",
      userId: 0,
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isDisabled: true,
    });

    const response = await sut.add({
      content: "any_content",
      userId: 0,
    });

    expect(addPostRepository.add).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      id: 0,
      content: "any_content",
      userId: 0,
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isDisabled: true,
    });
  });
});
