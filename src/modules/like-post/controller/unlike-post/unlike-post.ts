import {
  Controller,
  HttpRequest,
  HttpResponse,
  LikePostModel,
  UnlikePost,
  badRequest,
  created,
  serverError,
  validateBodyFields,
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

      const data = validateBodyFields<LikePostModel>(
        [{ key: "postId", type: "string", required: true }],
        httpRequest.body
      );

      const response = await this.unlikePostUseCase.unlike({
        id: data.id,
        postId: data.postId,
        userId: user.id,
      });

      return created(response);
    } catch (error) {
      return serverError(error);
    }
  }
}
