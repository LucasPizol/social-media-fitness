import { AddUserModel, UserModel } from "@/domain/model/user";
import { AddUserRepository } from "@/domain/repository/user/add-user-repository";
import { LoadUserByEmailRepository } from "@/domain/repository/user/load-user-by-email-repository";
import { LoadUserByIdRepository } from "@/domain/repository/user/load-user-by-id-repository";
import { knexHelper } from "../knex/knex";

export class UserInfra
  implements
    AddUserRepository,
    LoadUserByEmailRepository,
    LoadUserByIdRepository
{
  async add(user: AddUserModel): Promise<Omit<UserModel, "password">> {
    return (
      await knexHelper("user")
        .insert(user)
        .returning(["id", "name", "email", "avatar", "createdAt", "updatedAt"])
    )[0];
  }

  async loadByEmail(email: string): Promise<UserModel | null> {
    return await knexHelper("user").where({ email }).first();
  }

  async loadById(
    id: string
  ): Promise<Pick<UserModel, "id" | "name" | "avatar"> | null> {
    return await knexHelper("user")
      .select(["id", "name", "avatar"])
      .where({ id })
      .first();
  }
}
