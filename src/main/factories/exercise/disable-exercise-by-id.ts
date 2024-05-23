import { ExerciseInfra } from "@/infra/exercise/exercise-infra";
import { DisableExerciseByIdController } from "@/modules/exercise/controller/disable-exercise-by-id/disable-exercise-by-id";
import { DisableExerciseByIdUseCase } from "@/modules/exercise/use-case/disable-exercise-by-id/disable-exercise-by-id";
import { Controller } from "@/protocols/controller";

export const disableExerciseByIdFactory = (): Controller => {
  return new DisableExerciseByIdController(
    new DisableExerciseByIdUseCase(new ExerciseInfra())
  );
};
