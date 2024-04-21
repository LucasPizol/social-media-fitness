import {
  Controller,
  HttpRequest,
  HttpResponse,
  LikePost,
  badRequest,
  created,
  serverError,
} from "./like-post-protocols";

export class LikePostController implements Controller {
  private readonly likePostUseCase: LikePost;

  constructor(likePostUseCase: LikePost) {
    this.likePostUseCase = likePostUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;
      const params = httpRequest.params;

      if (!user) return badRequest(new Error("user"));
      if (!params?.id) return badRequest(new Error("Param ID not recieved"));

      const response = await this.likePostUseCase.like({
        postId: params.id,
        userId: user.id,
      });

      return created(response);
    } catch (error) {
      return serverError(error);
    }
  }
}
