import { AddExerciseModel, ExerciseModel } from "@/domain/model/exercise";

export interface AddExercise {
  add: (data: AddExerciseModel) => Promise<ExerciseModel>;
}
