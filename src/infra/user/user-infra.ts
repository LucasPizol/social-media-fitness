import { UserModel, UserRegisterAttributes } from "@/domain/model/user";
import { AddUserRepository } from "@/domain/repository/user/create-user-repository";
import { LoadUserByEmailRepository } from "@/domain/repository/user/load-user-by-email-repository";
import { knexHelper } from "../knex/knex";

export class UserInfra implements AddUserRepository, LoadUserByEmailRepository {
  async add(user: UserRegisterAttributes): Promise<UserModel> {
    const data = await knexHelper("user").insert(user).returning("*");

    return data[0];
  }

  async loadByEmail(email: string): Promise<UserModel | null> {
    const user = await knexHelper("user").where({ email }).first();
    return user;
  }
}
