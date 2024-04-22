import { UserModel } from "@/domain/model/user";

export interface LoadUserById {
  loadById: (
    id: string
  ) => Promise<Pick<UserModel, "id" | "name" | "avatar"> | null>;
}
