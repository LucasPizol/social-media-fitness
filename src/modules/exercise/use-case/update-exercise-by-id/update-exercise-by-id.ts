import {
  ExerciseModel,
  UpdateExerciseById,
  UpdateExerciseByIdRepository,
} from "./update-exercise-by-id-protocols";

export class UpdateExerciseByIdUseCase implements UpdateExerciseById {
  private readonly updateExerciseByIdRepository: UpdateExerciseByIdRepository;

  constructor(updateExerciseByIdRepository: UpdateExerciseByIdRepository) {
    this.updateExerciseByIdRepository = updateExerciseByIdRepository;
  }

  async updateById(
    id: string,
    userId: string,
    data: Partial<ExerciseModel>
  ): Promise<ExerciseModel | null> {
    return await this.updateExerciseByIdRepository.updateById(id, userId, data);
  }
}
