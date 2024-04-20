import { UserModel, UserRegisterAttributes } from "@/domain/model/user";
import { AddUserRepository } from "@/domain/repository/user/create-user-repository";
import knex from "knex";

export class UserInfra implements AddUserRepository {
  async add(user: UserRegisterAttributes): Promise<UserModel> {
    const data = await knex("user").insert(user).returning("*");

    console.log(data);

    return data[0];
  }
}
