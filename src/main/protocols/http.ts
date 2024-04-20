import { UserModel } from "@/domain/model/user";

export interface HttpRequest {
  body?: any;
  headers?: any;
  params?: any;
  query?: any;
  user?: Pick<UserModel, "avatar" | "id" | "name" | "email">;
}

export interface HttpResponse {
  statusCode: number;
  body?: any;
}
