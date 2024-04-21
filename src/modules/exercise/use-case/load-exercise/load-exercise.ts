import {
  ExerciseModel,
  LoadExercise,
  LoadExerciseRepository,
} from "./load-exercise-protocols";

export class LoadExerciseUseCase implements LoadExercise {
  private readonly loadExerciseRepository: LoadExerciseRepository;

  constructor(loadExerciseRepository: LoadExerciseRepository) {
    this.loadExerciseRepository = loadExerciseRepository;
  }

  async load(userId: string): Promise<ExerciseModel[] | null> {
    return await this.loadExerciseRepository.load(userId);
  }
}
