import { LoadUserById } from "@/domain/use-case/user/load-user-by-id";
import { ok, serverError } from "@/main/helpers/http";
import { Controller } from "@/main/protocols/controller";
import { HttpRequest, HttpResponse } from "@/main/protocols/http";
import { validateBodyFields } from "@/utils/validate-body-fields";

export class LoadUserByIdController implements Controller {
  private readonly loadUserByIdUseCase: LoadUserById;

  constructor(loadUserByIdUseCase: LoadUserById) {
    this.loadUserByIdUseCase = loadUserByIdUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const data = validateBodyFields<{ id: string }>(
        [
          {
            key: "id",
            type: "string",
            required: true,
          },
        ],
        httpRequest.params
      );

      const response = await this.loadUserByIdUseCase.loadById(data.id);

      return ok(response);
    } catch (error) {
      return serverError(error);
    }
  }
}
