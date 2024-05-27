import { LoadPost } from "@/domain/use-case/post/load-post";
import { BadRequestError } from "@/protocols/errors/bad-request";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  handleErr,
  ok,
} from "./load-post-by-user-id-protocols";

export class LoadPostController implements Controller {
  private readonly loadPostByUserIdUseCase: LoadPost;

  constructor(loadPostByUserIdUseCase: LoadPost) {
    this.loadPostByUserIdUseCase = loadPostByUserIdUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const query = httpRequest.query;

      if (!query.postCount) throw new BadRequestError("postCount is required");

      const response = await this.loadPostByUserIdUseCase.load(
        Number(query.postCount),
        query.id ? Number(query.id) : undefined
      );

      return ok(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
