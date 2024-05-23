import { AddExerciseModel, ExerciseModel } from "@/domain/model/exercise";
import { AddExerciseRepository } from "@/domain/repository/exercise/add-exercise-repository";
import { DisableExerciseByIdRepository } from "@/domain/repository/exercise/disable-exercise-by-id-repository";
import { LoadExerciseRepository } from "@/domain/repository/exercise/load-exercise-repository";
import { UpdateExerciseByIdRepository } from "@/domain/repository/exercise/update-exercise-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class ExerciseInfra
  implements
    AddExerciseRepository,
    LoadExerciseRepository,
    UpdateExerciseByIdRepository,
    DisableExerciseByIdRepository
{
  async add(data: AddExerciseModel) {
    return await prismaHelper.exercise.create({ data });
  }

  async load(userId: number) {
    return await prismaHelper.exercise.findMany({ where: { userId } });
  }

  async updateById(
    id: number,
    userId: number,
    data: Partial<ExerciseModel>
  ): Promise<ExerciseModel | null> {
    return await prismaHelper.exercise.update({
      where: { id, userId },
      data,
    });
  }

  async disableById(
    id: number,
    userId: number,
    isDisabled: boolean
  ): Promise<ExerciseModel | null> {
    return await prismaHelper.exercise.update({
      where: { id, userId },
      data: { isDisabled, disabledAt: isDisabled ? new Date() : null },
    });
  }
}
