import {
  Controller,
  HttpRequest,
  HttpResponse,
  RegisterUser,
  created,
  handleErr,
} from "./register-user-protocols";

export class RegisterUserController implements Controller {
  private readonly registerUserUseCase: RegisterUser;

  constructor(registerUserUseCase: RegisterUser) {
    this.registerUserUseCase = registerUserUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.registerUserUseCase.register(httpRequest.body);

      return created(user);
    } catch (error) {
      return handleErr(error);
    }
  }
}
