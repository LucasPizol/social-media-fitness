import { ExerciseInfra } from "@/infra/exercise/exercise-infra";
import { Controller } from "@/main/protocols/controller";
import { DisableExerciseByIdController } from "@/modules/exercise/controller/disable-exercise-by-id/disable-exercise-by-id";
import { DisableExerciseByIdUseCase } from "@/modules/exercise/use-case/disable-exercise-by-id/disable-exercise-by-id";

export const disableExerciseByIdFactory = (): Controller => {
  return new DisableExerciseByIdController(
    new DisableExerciseByIdUseCase(new ExerciseInfra())
  );
};
