import { DisableExerciseByIdRepository } from "@/domain/repository/exercise/disable-exercise-by-id-repository";
import { DisableExerciseById } from "@/domain/use-case/exercise/disable-exercise-by-id";
import { MockProxy, mock } from "jest-mock-extended";
import { DisableExerciseByIdUseCase } from "./disable-exercise-by-id";

describe("Disable Exercise By Id Use Case", () => {
  let sut: DisableExerciseById;
  let disableExerciseByIdRepository: MockProxy<DisableExerciseByIdRepository>;

  beforeEach(() => {
    disableExerciseByIdRepository = mock();
    sut = new DisableExerciseByIdUseCase(disableExerciseByIdRepository);
  });

  const fakeDate = new Date();

  it("should be able to disable exercise by id", async () => {
    disableExerciseByIdRepository.disableById.mockResolvedValue({
      id: "any_id",
      name: "any_name",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: fakeDate,
      isActive: true,
      userId: "any_user_id",
    });

    const response = await sut.disableById("any_id", "any_user_id", true);

    expect(response).toEqual({
      id: "any_id",
      name: "any_name",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: fakeDate,
      isActive: true,
      userId: "any_user_id",
    });
  });

  it("should be able to enable exercise by id", async () => {
    disableExerciseByIdRepository.disableById.mockResolvedValue({
      id: "any_id",
      name: "any_name",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isActive: false,
      userId: "any_user_id",
    });

    const response = await sut.disableById("any_id", "any_user_id", false);

    expect(response).toEqual({
      id: "any_id",
      name: "any_name",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isActive: false,
      userId: "any_user_id",
    });
  });
});
