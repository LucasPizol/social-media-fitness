import { ExerciseModel } from "@/domain/model/exercise";

export interface DisableExerciseById {
  disableById: (
    id: number,
    userId: number,
    isDisabled: boolean
  ) => Promise<ExerciseModel | null>;
}
