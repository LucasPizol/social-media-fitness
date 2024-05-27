import {
  AddComment,
  AddCommentModel,
  BadRequestError,
  Controller,
  HttpRequest,
  HttpResponse,
  created,
  handleErr,
  validateBodyFields,
} from "./add-comment-protocols";

export class AddCommentController implements Controller {
  private readonly addCommentUseCase: AddComment;

  constructor(addCommentUseCase: AddComment) {
    this.addCommentUseCase = addCommentUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) throw new BadRequestError("user");

      const data = validateBodyFields<AddCommentModel>(
        [
          {
            key: "postId",
            type: "number",
            required: true,
          },
          {
            key: "content",
            type: "number",
            required: true,
          },
          {
            key: "parentCommentId",
            type: "number",
            required: false,
          },
        ],
        httpRequest.body
      );

      const response = await this.addCommentUseCase.add({
        ...data,
        userId: user.id,
      });

      return created(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
