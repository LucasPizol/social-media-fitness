export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddUserModel {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}
