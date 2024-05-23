import { DisablePostById } from "@/domain/use-case/post/disable-post-by-id-repository";
import { created, handleErr } from "@/main/helpers/http";
import { Controller } from "@/protocols/controller";
import { BadRequestError } from "@/protocols/errors/bad-request";
import { HttpRequest, HttpResponse } from "@/protocols/http";
import { validateBodyFields } from "../add-post/add-post-protocols";

export class DisablePostByIdController implements Controller {
  private readonly disablePostByIdUseCase: DisablePostById;

  constructor(disablePostByIdUseCase: DisablePostById) {
    this.disablePostByIdUseCase = disablePostByIdUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) throw new BadRequestError("user");

      const data = validateBodyFields<{ id: number }>(
        [
          {
            key: "id",
            type: "number",
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
      return handleErr(error);
    }
  }
}
