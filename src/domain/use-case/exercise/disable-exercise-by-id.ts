import { ExerciseModel } from "@/domain/model/exercise";

export interface DisableExerciseById {
  disableById: (
    id: string,
    userId: string,
    isActive: boolean
  ) => Promise<ExerciseModel | null>;
}
