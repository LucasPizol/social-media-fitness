import { RegisterUser } from "@/domain/use-case/user/register-user";
import { Controller } from "@/main/protocols/controller";
import { HttpRequest, HttpResponse } from "@/main/protocols/http";

export class RegisterUserController implements Controller {
  private readonly registerUserUseCase: RegisterUser;

  constructor(registerUserUseCase: RegisterUser) {
    this.registerUserUseCase = registerUserUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.registerUserUseCase.register(httpRequest.body);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
      };
    }
  }
}
