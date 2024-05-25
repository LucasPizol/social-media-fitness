import { AddPostMedia } from "@/domain/use-case/post-media/add-post-media";
import { File } from "@/protocols/http";
import {
  AddPost,
  AddPostModel,
  AddPostRepository,
  PostModel,
} from "./add-post-protocols";

export class AddPostUseCase implements AddPost {
  private readonly addPostRepository: AddPostRepository;
  private readonly addPostMediaUseCase: AddPostMedia;

  constructor(
    addPostRepository: AddPostRepository,
    addPostMediaUseCase: AddPostMedia
  ) {
    this.addPostRepository = addPostRepository;
    this.addPostMediaUseCase = addPostMediaUseCase;
  }

  async add(data: AddPostModel, files?: File[]): Promise<PostModel> {
    const post = await this.addPostRepository.add(data);

    if (files)
      await this.addPostMediaUseCase.add(
        { postId: post.id, userId: data.userId },
        files
      );

    return post;
  }
}
