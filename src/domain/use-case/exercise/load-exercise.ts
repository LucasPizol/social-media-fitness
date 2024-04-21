import { ExerciseModel } from "@/domain/model/exercise";

export interface LoadExercise {
  load: (userId: string) => Promise<ExerciseModel[] | null>;
}
