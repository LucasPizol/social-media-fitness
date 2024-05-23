import { BadRequestError } from "@/protocols/errors/bad-request";
import {
  AddPost,
  AddPostModel,
  Controller,
  HttpRequest,
  HttpResponse,
  created,
  handleErr,
  validateBodyFields,
} from "./add-post-protocols";

export class AddPostController implements Controller {
  private readonly addPostUseCase: AddPost;

  constructor(addPostUseCase: AddPost) {
    this.addPostUseCase = addPostUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) throw new BadRequestError("user");

      const data = validateBodyFields<AddPostModel>(
        [
          {
            key: "content",
            type: "string",
            required: true,
          },
        ],
        httpRequest.body
      );

      const response = await this.addPostUseCase.add({
        ...data,
        userId: user.id,
      });

      return created(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
