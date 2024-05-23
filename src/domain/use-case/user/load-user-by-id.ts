import { UserModel } from "@/domain/model/user";

export interface LoadUserById {
  loadById: (
    id: number
  ) => Promise<Pick<UserModel, "id" | "name" | "avatar"> | null>;
}
