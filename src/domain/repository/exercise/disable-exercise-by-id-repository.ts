import { ExerciseModel } from "@/domain/model/exercise";

export interface DisableExerciseByIdRepository {
  disableById: (
    id: number,
    userId: number,
    isDisabled: boolean
  ) => Promise<ExerciseModel | null>;
}
