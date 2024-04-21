import { ExerciseInfra } from "@/infra/exercise/exercise-infra";
import { Controller } from "@/main/protocols/controller";
import { AddExerciseController } from "@/modules/exercise/controller/add-exercise/add-exercise";
import { AddExerciseUseCase } from "@/modules/exercise/use-case/add-exercise";

export const addExerciseFactory = (): Controller => {
  return new AddExerciseController(new AddExerciseUseCase(new ExerciseInfra()));
};
