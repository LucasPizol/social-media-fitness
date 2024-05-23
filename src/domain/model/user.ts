export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type AddUserModel = Omit<UserModel, "id" | "createdAt" | "updatedAt">;

export type LoginUserModel = Pick<UserModel, "email" | "password">;
