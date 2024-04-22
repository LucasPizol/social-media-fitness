import { MockProxy, mock } from "jest-mock-extended";
import { LoadExerciseUseCase } from "./load-exercise";
import {
  LoadExercise,
  LoadExerciseRepository,
} from "./load-exercise-protocols";

describe("Load Exercise Use Case", () => {
  let sut: LoadExercise;
  let loadExerciseRepository: MockProxy<LoadExerciseRepository>;

  beforeEach(() => {
    loadExerciseRepository = mock();

    sut = new LoadExerciseUseCase(loadExerciseRepository);
  });

  const fakeDate = new Date();

  it("should return exercise on success", async () => {
    loadExerciseRepository.load.mockResolvedValue([
      {
        id: "any_id",
        name: "any_name",
        userId: "any_user_id",
        createdAt: fakeDate,
        updatedAt: fakeDate,
        disabledAt: null,
        isActive: true,
      },
    ]);

    const response = await sut.load("any_user_id");

    expect(loadExerciseRepository.load).toHaveBeenCalledTimes(1);
    expect(response).toEqual([
      {
        id: "any_id",
        name: "any_name",
        userId: "any_user_id",
        createdAt: fakeDate,
        updatedAt: fakeDate,
        disabledAt: null,
        isActive: true,
      },
    ]);
  });
});
