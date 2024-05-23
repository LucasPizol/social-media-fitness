import { ExerciseInfra } from "@/infra/exercise/exercise-infra";
import { AddExerciseController } from "@/modules/exercise/controller/add-exercise/add-exercise";
import { AddExerciseUseCase } from "@/modules/exercise/use-case/add-exercise/add-exercise";
import { Controller } from "@/protocols/controller";

export const addExerciseFactory = (): Controller => {
  return new AddExerciseController(new AddExerciseUseCase(new ExerciseInfra()));
};
