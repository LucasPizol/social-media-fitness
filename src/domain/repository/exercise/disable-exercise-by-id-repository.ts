import { ExerciseModel } from "@/domain/model/exercise";

export interface DisableExerciseByIdRepository {
  disableById: (
    id: string,
    userId: string,
    isActive: boolean
  ) => Promise<ExerciseModel | null>;
}