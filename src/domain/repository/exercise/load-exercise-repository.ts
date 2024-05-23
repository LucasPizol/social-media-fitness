import { ExerciseModel } from "@/domain/model/exercise";

export interface LoadExerciseRepository {
  load: (userId: number) => Promise<ExerciseModel[] | null>;
}
