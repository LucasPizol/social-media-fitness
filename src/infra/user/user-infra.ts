import { AddUserModel, UserModel } from "@/domain/model/user";
import { AddUserRepository } from "@/domain/repository/user/add-user-repository";
import { LoadUserByEmailRepository } from "@/domain/repository/user/load-user-by-email-repository";
import { knexHelper } from "../knex/knex";

export class UserInfra implements AddUserRepository, LoadUserByEmailRepository {
  async add(user: AddUserModel): Promise<UserModel> {
    return (await knexHelper("user").insert(user).returning("*"))[0];
  }

  async loadByEmail(email: string): Promise<UserModel | null> {
    return await knexHelper("user").where({ email }).first();
  }
}
