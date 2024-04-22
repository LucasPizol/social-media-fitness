import {
  Controller,
  HttpRequest,
  HttpResponse,
  LoadPostByUserId,
  badRequest,
  ok,
  serverError,
  validateBodyFields,
} from "./load-post-by-user-id-protocols";

export class LoadPostByUserIdController implements Controller {
  private readonly loadPostByUserIdUseCase: LoadPostByUserId;

  constructor(loadPostByUserIdUseCase: LoadPostByUserId) {
    this.loadPostByUserIdUseCase = loadPostByUserIdUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) return badRequest(new Error("User not found"));

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

      const response = await this.loadPostByUserIdUseCase.loadByUserId(data.id);

      return ok(response);
    } catch (error) {
      return serverError(error);
    }
  }
}
