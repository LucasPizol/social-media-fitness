import { DisablePostByIdRepository } from "@/domain/repository/post/disable-post-by-id-repository";
import { DisablePostById } from "@/domain/use-case/post/disable-post-by-id-repository";
import { MockProxy, mock } from "jest-mock-extended";
import { DisablePostByIdUseCase } from "./disable-post-by-id";

describe("Disable Post By Id", () => {
  let sut: DisablePostById;
  let disablePostByIdRepository: MockProxy<DisablePostByIdRepository>;

  beforeEach(() => {
    disablePostByIdRepository = mock();
    sut = new DisablePostByIdUseCase(disablePostByIdRepository);
  });

  it("should be able to disable post by id", async () => {
    disablePostByIdRepository.disableById.mockResolvedValue();
    const response = await sut.disableById(1, 2);
    expect(response).toBeUndefined();
  });
});
