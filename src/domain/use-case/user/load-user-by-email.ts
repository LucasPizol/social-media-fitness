import { UserModel } from "@/domain/model/user";

export interface LoadUserByEmail {
  loadByEmail: (email: string) => Promise<UserModel | null>;
}
