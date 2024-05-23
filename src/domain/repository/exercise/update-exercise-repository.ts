import { ExerciseModel } from "@/domain/model/exercise";

export interface UpdateExerciseByIdRepository {
  updateById: (
    id: number,
    userId: number,
    data: Partial<ExerciseModel>
  ) => Promise<ExerciseModel | null>;
}
