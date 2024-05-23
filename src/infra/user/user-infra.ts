import { AddUserModel } from "@/domain/model/user";
import { AddUserRepository } from "@/domain/repository/user/add-user-repository";
import { LoadUserByEmailRepository } from "@/domain/repository/user/load-user-by-email-repository";
import { LoadUserByIdRepository } from "@/domain/repository/user/load-user-by-id-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class UserInfra
  implements
    AddUserRepository,
    LoadUserByEmailRepository,
    LoadUserByIdRepository
{
  async add(data: AddUserModel) {
    return await prismaHelper.user.create({
      data,
      select: {
        avatar: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  async loadByEmail(email: string) {
    return await prismaHelper.user.findUnique({
      where: { email },
    });
  }

  async loadById(id: number) {
    return await prismaHelper.user.findUnique({ where: { id } });
  }
}
