import { BadRequestError } from "@/protocols/errors/bad-request";
import {
  Controller,
  DisableLike,
  HttpRequest,
  HttpResponse,
  handleErr,
  noContent,
} from "./unlike-post-protocols";

export class UnlikePostController implements Controller {
  private readonly unlikePostUseCase: DisableLike;

  constructor(unlikePostUseCase: DisableLike) {
    this.unlikePostUseCase = unlikePostUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;
      const params = httpRequest.params;

      if (!user) throw new BadRequestError("user");
      if (!params?.id) throw new BadRequestError("Param 'id' not recieved");

      const response = await this.unlikePostUseCase.unlike({
        postId: Number(params.id),
        likedById: user.id,
      });

      return noContent(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
