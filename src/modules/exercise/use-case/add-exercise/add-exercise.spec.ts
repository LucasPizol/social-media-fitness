import { MockProxy, mock } from "jest-mock-extended";
import { AddExerciseUseCase } from "./add-exercise";
import { AddExercise, AddExerciseRepository } from "./add-exercise-protocols";

describe("Add Exercise Use Case", () => {
  let sut: AddExercise;
  let addExerciseRepository: MockProxy<AddExerciseRepository>;

  const fakeDate = new Date();

  const fakeExerciseModel = {
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
  };

  beforeEach(() => {
    addExerciseRepository = mock();
    sut = new AddExerciseUseCase(addExerciseRepository);
  });

  it("should return exercise on success", async () => {
    addExerciseRepository.add.mockResolvedValue(fakeExerciseModel);
    const response = await sut.add({
      name: "any_name",
      repeats: 0,
      rest_time: 0,
      rest_type: "any_rest_type",
      series: 0,
      weight: 0,
      userId: 0,
    });

    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("name");
    expect(addExerciseRepository.add).toHaveBeenCalledTimes(1);
  });
});
