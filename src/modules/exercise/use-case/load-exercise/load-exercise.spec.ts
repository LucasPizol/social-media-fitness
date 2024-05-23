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
      },
    ]);

    const response = await sut.load(0);

    expect(loadExerciseRepository.load).toHaveBeenCalledTimes(1);
    expect(response).toEqual([
      {
        id: 0,
        name: "any_other_name",
        userId: 0,
        createdAt: fakeDate,
        updatedAt: fakeDate,
        disabledAt: null,
        isDisabled: true,
        repeats: 0,
        rest_time: 0,
        rest_type: "any_rest_type",
        series: 0,
        weight: 0,
      },
    ]);
  });
});
