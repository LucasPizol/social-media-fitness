import {
  AddPost,
  AddPostModel,
  AddPostRepository,
  PostModel,
} from "./add-post-protocols";

export class AddPostUseCase implements AddPost {
  private readonly addPostRepository: AddPostRepository;

  constructor(addPostRepository: AddPostRepository) {
    this.addPostRepository = addPostRepository;
  }

  async add(data: AddPostModel): Promise<PostModel> {
    return await this.addPostRepository.add(data);
  }
}
