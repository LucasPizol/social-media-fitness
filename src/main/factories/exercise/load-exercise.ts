import { ExerciseInfra } from "@/infra/exercise/exercise-infra";
import { LoadExerciseController } from "@/modules/exercise/controller/load-exercise/load-exercise";
import { LoadExerciseUseCase } from "@/modules/exercise/use-case/load-exercise/load-exercise";
import { Controller } from "@/protocols/controller";

export const loadExerciseFactory = (): Controller => {
  return new LoadExerciseController(
    new LoadExerciseUseCase(new ExerciseInfra())
  );
};
