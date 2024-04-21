import { MockProxy, mock } from "jest-mock-extended";
import { AddExerciseUseCase } from "./add-exercise";
import { AddExercise, AddExerciseRepository } from "./add-exercise-protocols";

describe("Add Exercise Controller", () => {
  let sut: AddExercise;
  let addExerciseRepository: MockProxy<AddExerciseRepository>;

  const fakeDate = new Date();

  const fakeExerciseModel = {
    id: "any_id",
    name: "any_name",
    userId: "any_user_id",
    createdAt: fakeDate,
    updatedAt: fakeDate,
  };

  beforeEach(() => {
    addExerciseRepository = mock();
    sut = new AddExerciseUseCase(addExerciseRepository);
  });

  it("should return exercise on success", async () => {
    addExerciseRepository.add.mockResolvedValue(fakeExerciseModel);
    const response = await sut.add({ name: "any_name", userId: "any_user_id" });

    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("name");
    expect(addExerciseRepository.add).toHaveBeenCalledTimes(1);
  });
});
