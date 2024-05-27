import { LoadComment } from "@/domain/use-case/comment/load-comment";
import { handleErr, ok } from "@/main/helpers/http";
import { Controller } from "@/protocols/controller";
import { BadRequestError } from "@/protocols/errors/bad-request";
import { HttpRequest, HttpResponse } from "@/protocols/http";

export class LoadCommentController implements Controller {
  private readonly loadCommentUseCase: LoadComment;

  constructor(loadCommentUseCase: LoadComment) {
    this.loadCommentUseCase = loadCommentUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;
      const query = httpRequest.query;

      if (!user) throw new BadRequestError("User not found");
      if (!query.postId) throw new BadRequestError("postId");

      const response = await this.loadCommentUseCase.load(Number(query.postId));

      return ok(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
