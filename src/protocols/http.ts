import { UserModel } from "@/domain/model/user";

export interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
}

export interface HttpRequest {
  body?: any;
  headers?: any;
  params?: any;
  query?: any;
  user?: Pick<UserModel, "avatar" | "id" | "name" | "email">;
  file?: File;
  files?: File[];
}

export interface HttpResponse {
  statusCode: number;
  body?: any;
  type?: string;
}
