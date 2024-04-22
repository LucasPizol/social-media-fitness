import { UserModel } from "@/domain/model/user";

export interface LoadUserByIdRepository {
  loadById: (
    id: string
  ) => Promise<Pick<UserModel, "id" | "name" | "avatar"> | null>;
}
