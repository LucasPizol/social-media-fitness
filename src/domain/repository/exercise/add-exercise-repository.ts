import { AddExerciseModel, ExerciseModel } from "@/domain/model/exercise";

export interface AddExerciseRepository {
  add: (data: AddExerciseModel) => Promise<ExerciseModel>;
}
