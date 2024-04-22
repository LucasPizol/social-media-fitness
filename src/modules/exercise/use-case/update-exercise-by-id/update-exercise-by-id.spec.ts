import { MockProxy, mock } from "jest-mock-extended";
import { UpdateExerciseByIdUseCase } from "./update-exercise-by-id";
import {
  UpdateExerciseById,
  UpdateExerciseByIdRepository,
} from "./update-exercise-by-id-protocols";

describe("Update Exercise By Id Use Case", () => {
  let sut: UpdateExerciseById;
  let updateExerciseByIdRepository: MockProxy<UpdateExerciseByIdRepository>;

  const fakeDate = new Date();

  beforeEach(() => {
    updateExerciseByIdRepository = mock();
    sut = new UpdateExerciseByIdUseCase(updateExerciseByIdRepository);
  });

  it("should be able to update exercise by id", async () => {
    updateExerciseByIdRepository.updateById.mockResolvedValue({
      id: "any_id",
      name: "any_other_name",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isActive: true,
      userId: "any_user_id",
    });

    const response = await sut.updateById("any_id", "any_user_id", {
      name: "any_other_name",
    });

    expect(response).toEqual({
      id: "any_id",
      name: "any_other_name",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isActive: true,
      userId: "any_user_id",
    });
  });
});
