import {
  Controller,
  HttpRequest,
  HttpResponse,
  LoadPostByUserId,
  handleErr,
  ok,
  validateBodyFields,
} from "./load-post-by-user-id-protocols";

export class LoadPostByUserIdController implements Controller {
  private readonly loadPostByUserIdUseCase: LoadPostByUserId;

  constructor(loadPostByUserIdUseCase: LoadPostByUserId) {
    this.loadPostByUserIdUseCase = loadPostByUserIdUseCase;
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

      const response = await this.loadPostByUserIdUseCase.loadByUserId(data.id);

      return ok(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
