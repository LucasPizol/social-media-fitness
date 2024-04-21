import { AddExerciseModel, ExerciseModel } from "@/domain/model/exercise";
import { AddExerciseRepository } from "@/domain/repository/exercise/add-exercise-repository";
import { DisableExerciseByIdRepository } from "@/domain/repository/exercise/disable-exercise-by-id-repository";
import { LoadExerciseRepository } from "@/domain/repository/exercise/load-exercise-repository";
import { UpdateExerciseByIdRepository } from "@/domain/repository/exercise/update-exercise-repository";
import { knexHelper } from "../knex/knex";

export class ExerciseInfra
  implements
    AddExerciseRepository,
    LoadExerciseRepository,
    UpdateExerciseByIdRepository,
    DisableExerciseByIdRepository
{
  async add({ name, userId }: AddExerciseModel): Promise<ExerciseModel> {
    return (
      await knexHelper("exercise").insert({ name, userId }).returning("*")
    )[0];
  }

  async load(userId: string): Promise<ExerciseModel[] | null> {
    return await knexHelper("exercise").where({ userId });
  }

  async updateById(
    id: string,
    userId: string,
    data: Partial<ExerciseModel>
  ): Promise<ExerciseModel | null> {
    return (
      await knexHelper("exercise")
        .where({ id, userId })
        .update(data)
        .returning("*")
    )[0];
  }

  async disableById(
    id: string,
    userId: string,
    isActive: boolean
  ): Promise<ExerciseModel | null> {
    return (
      await knexHelper("exercise")
        .where({ id, userId })
        .update({ isActive, disabledAt: isActive ? null : new Date() })
        .returning("*")
    )[0];
  }
}
