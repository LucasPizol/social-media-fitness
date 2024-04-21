import {
  AddExercise,
  AddExerciseModel,
  AddExerciseRepository,
  ExerciseModel,
} from "./add-exercise-protocols";

export class AddExerciseUseCase implements AddExercise {
  private readonly addExerciseRepository: AddExerciseRepository;

  constructor(addExerciseRepository: AddExerciseRepository) {
    this.addExerciseRepository = addExerciseRepository;
  }

  async add(data: AddExerciseModel): Promise<ExerciseModel> {
    return await this.addExerciseRepository.add(data);
  }
}
