import { LoadPost } from "@/domain/use-case/post/load-post";
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
      const id = httpRequest.query;

      const response = await this.loadPostByUserIdUseCase.load(
        id ? Number(id) : undefined
      );

      return ok(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
