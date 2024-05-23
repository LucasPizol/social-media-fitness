import { UserModel } from "@/domain/model/user";

export interface LoadUserByIdRepository {
  loadById: (
    id: number
  ) => Promise<Pick<UserModel, "id" | "name" | "avatar"> | null>;
}
