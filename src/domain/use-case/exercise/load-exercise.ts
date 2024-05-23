import { ExerciseModel } from "@/domain/model/exercise";

export interface LoadExercise {
  load: (userId: number) => Promise<ExerciseModel[] | null>;
}
