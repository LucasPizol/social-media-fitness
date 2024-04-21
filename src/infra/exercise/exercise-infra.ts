import { AddExerciseModel, ExerciseModel } from "@/domain/model/exercise";
import { AddExerciseRepository } from "@/domain/repository/exercise/add-exercise-repository";
import { knexHelper } from "../knex/knex";

export class ExerciseInfra implements AddExerciseRepository {
  async add({ name, userId }: AddExerciseModel): Promise<ExerciseModel> {
    return (
      await knexHelper("exercise").insert({ name, userId }).returning("*")
    )[0];
  }
}
