import { LoginUser } from "@/domain/use-case/user/login-user";
import { created, serverError } from "@/main/helpers/http";
import { Controller } from "@/main/protocols/controller";
import { HttpRequest, HttpResponse } from "@/main/protocols/http";
import { validateBodyFields } from "@/utils/validate-body-fields";
import { LoginUserModel } from "../../use-case/add-user/add-user-protocols";

export class LoginUserController implements Controller {
  private readonly loginUserUseCase: LoginUser;

  constructor(loginUserUseCase: LoginUser) {
    this.loginUserUseCase = loginUserUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const data = validateBodyFields<LoginUserModel>(
        [
          {
            key: "email",
            required: true,
            type: "string",
          },
          {
            key: "password",
            required: true,
            type: "string",
          },
        ],
        httpRequest.body
      );

      const response = await this.loginUserUseCase.login(
        data.email,
        data.password
      );

      return created(response);
    } catch (error) {
      return serverError(error);
    }
  }
}
