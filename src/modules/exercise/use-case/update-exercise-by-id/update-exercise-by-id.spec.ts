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
      id: 0,
      name: "any_other_name",
      createdAt: fakeDate,
      repeats: 0,
      rest_time: 0,
      rest_type: "any_rest_type",
      series: 0,
      weight: 0,
      updatedAt: fakeDate,
      disabledAt: null,
      isDisabled: true,
      userId: 0,
    });

    const response = await sut.updateById(0, 0, {
      name: "any_other_name",
    });

    expect(response).toEqual({
      id: 0,
      name: "any_other_name",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: null,
      isDisabled: true,
      userId: 0,
      repeats: 0,
      rest_time: 0,
      rest_type: "any_rest_type",
      series: 0,
      weight: 0,
    });
  });
});
