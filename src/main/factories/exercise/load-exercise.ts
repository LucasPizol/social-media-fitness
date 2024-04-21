import { ExerciseInfra } from "@/infra/exercise/exercise-infra";
import { Controller } from "@/main/protocols/controller";
import { LoadExerciseController } from "@/modules/exercise/controller/load-exercise/load-exercise";
import { LoadExerciseUseCase } from "@/modules/exercise/use-case/load-exercise/load-exercise";

export const loadExerciseFactory = (): Controller => {
  return new LoadExerciseController(
    new LoadExerciseUseCase(new ExerciseInfra())
  );
};
