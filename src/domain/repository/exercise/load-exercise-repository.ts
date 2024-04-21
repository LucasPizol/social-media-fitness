import { ExerciseModel } from "@/domain/model/exercise";

export interface LoadExerciseRepository {
  load: (userId: string) => Promise<ExerciseModel[] | null>;
}
