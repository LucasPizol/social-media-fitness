import {
  AddComment,
  AddCommentModel,
  AddCommentRepository,
  CommentModel,
} from "./add-comment-protocols";

export class AddCommentUseCase implements AddComment {
  private readonly addCommentRepository: AddCommentRepository;

  constructor(addCommentRepository: AddCommentRepository) {
    this.addCommentRepository = addCommentRepository;
  }

  async add(data: AddCommentModel): Promise<CommentModel> {
    return await this.addCommentRepository.add(data);
  }
}
