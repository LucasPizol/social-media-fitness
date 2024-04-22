import { DisablePostById } from "@/domain/use-case/post/disable-post-by-id-repository";
import { badRequest, created, serverError } from "@/main/helpers/http";
import { Controller } from "@/main/protocols/controller";
import { HttpRequest, HttpResponse } from "@/main/protocols/http";
import { validateBodyFields } from "../add-post/add-post-protocols";

export class DisablePostByIdController implements Controller {
  private readonly disablePostByIdUseCase: DisablePostById;

  constructor(disablePostByIdUseCase: DisablePostById) {
    this.disablePostByIdUseCase = disablePostByIdUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) return badRequest(new Error("user"));

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

      const response = await this.disablePostByIdUseCase.disableById(
        data.id,
        user.id
      );

      return created(response);
    } catch (error) {
      return serverError(error);
    }
  }
}