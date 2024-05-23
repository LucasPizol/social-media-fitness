import { ExerciseInfra } from "@/infra/exercise/exercise-infra";
import { UpdateExerciseByIdController } from "@/modules/exercise/controller/update-exercise-by-id/update-exercise-by-id";
import { UpdateExerciseByIdUseCase } from "@/modules/exercise/use-case/update-exercise-by-id/update-exercise-by-id";
import { Controller } from "@/protocols/controller";

export const updateExerciseFactory = (): Controller => {
  return new UpdateExerciseByIdController(
    new UpdateExerciseByIdUseCase(new ExerciseInfra())
  );
};
