import { ExerciseModel } from "@/domain/model/exercise";

export interface UpdateExerciseByIdRepository {
  updateById: (
    id: string,
    userId: string,
    data: Partial<ExerciseModel>
  ) => Promise<ExerciseModel | null>;
}
