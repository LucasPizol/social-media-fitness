import { ExerciseInfra } from "@/infra/exercise/exercise-infra";
import { Controller } from "@/main/protocols/controller";
import { UpdateExerciseByIdController } from "@/modules/exercise/controller/update-exercise-by-id/update-exercise-by-id";
import { UpdateExerciseByIdUseCase } from "@/modules/exercise/use-case/update-exercise-by-id/update-exercise-by-id";

export const updateExerciseFactory = (): Controller => {
  return new UpdateExerciseByIdController(
    new UpdateExerciseByIdUseCase(new ExerciseInfra())
  );
};
