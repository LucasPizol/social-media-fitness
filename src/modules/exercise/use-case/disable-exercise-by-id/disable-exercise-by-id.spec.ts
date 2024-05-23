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
      id: 0,
      name: "any_other_name",
      createdAt: fakeDate,
      repeats: 0,
      rest_time: 0,
      rest_type: "any_rest_type",
      series: 0,
      weight: 0,
      updatedAt: fakeDate,
      disabledAt: fakeDate,
      isDisabled: true,
      userId: 0,
    });

    const response = await sut.disableById(0, 0, true);

    expect(response).toEqual({
      id: 0,
      name: "any_other_name",
      createdAt: fakeDate,
      updatedAt: fakeDate,
      disabledAt: fakeDate,
      isDisabled: true,
      userId: 0,
      repeats: 0,
      rest_time: 0,
      rest_type: "any_rest_type",
      series: 0,
      weight: 0,
    });
  });

  it("should be able to enable exercise by id", async () => {
    disableExerciseByIdRepository.disableById.mockResolvedValue({
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

    const response = await sut.disableById(0, 0, false);

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
