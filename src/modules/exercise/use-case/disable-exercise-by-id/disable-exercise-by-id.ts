import { DisableExerciseByIdRepository } from "@/domain/repository/exercise/disable-exercise-by-id-repository";
import { DisableExerciseById } from "@/domain/use-case/exercise/disable-exercise-by-id";
import { ExerciseModel } from "../add-exercise/add-exercise-protocols";

export class DisableExerciseByIdUseCase implements DisableExerciseById {
  private readonly disableExerciseByIdRepository: DisableExerciseByIdRepository;

  constructor(disableExerciseByIdRepository: DisableExerciseByIdRepository) {
    this.disableExerciseByIdRepository = disableExerciseByIdRepository;
  }

  async disableById(
    id: string,
    userId: string,
    isActive: boolean
  ): Promise<ExerciseModel | null> {
    return this.disableExerciseByIdRepository.disableById(id, userId, isActive);
  }
}
