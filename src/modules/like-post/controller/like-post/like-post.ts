import { BadRequestError } from "@/protocols/errors/bad-request";
import {
  AddLike,
  Controller,
  HttpRequest,
  HttpResponse,
  created,
  handleErr,
} from "./like-post-protocols";

export class LikePostController implements Controller {
  private readonly likePostUseCase: AddLike;

  constructor(likePostUseCase: AddLike) {
    this.likePostUseCase = likePostUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;
      const params = httpRequest.params;

      if (!user) throw new BadRequestError("user");
      if (!params?.id) throw new BadRequestError("Param 'id' not recieved");

      const response = await this.likePostUseCase.like({
        postId: Number(params.id),
        likedById: user.id,
      });

      return created(response);
    } catch (error) {
      console.log(error);
      return handleErr(error);
    }
  }
}
