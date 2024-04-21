import { ExerciseModel } from "@/domain/model/exercise";

export interface UpdateExerciseById {
  updateById: (
    id: string,
    userId: string,
    data: Partial<ExerciseModel>
  ) => Promise<ExerciseModel | null>;
}
