import {
  Controller,
  HttpRequest,
  HttpResponse,
  UnlikePost,
  badRequest,
  created,
  serverError,
} from "./unlike-post-protocols";

export class UnlikePostController implements Controller {
  private readonly unlikePostUseCase: UnlikePost;

  constructor(unlikePostUseCase: UnlikePost) {
    this.unlikePostUseCase = unlikePostUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;
      const params = httpRequest.params;

      if (!user) return badRequest(new Error("user"));
      if (!params?.id) return badRequest(new Error("Param ID not recieved"));

      const response = await this.unlikePostUseCase.unlike({
        postId: params.id,
        userId: user.id,
      });

      return created(response);
    } catch (error) {
      return serverError(error);
    }
  }
}
