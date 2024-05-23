import { ExerciseModel } from "@/domain/model/exercise";

export interface UpdateExerciseById {
  updateById: (
    id: number,
    userId: number,
    data: Partial<ExerciseModel>
  ) => Promise<ExerciseModel | null>;
}
