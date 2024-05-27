import { LoadComment, LoadCommentRepository } from "./load-comment-protocols";

export class LoadCommentUseCase implements LoadComment {
  private readonly loadCommentRepository: LoadCommentRepository;

  constructor(loadCommentRepository: LoadCommentRepository) {
    this.loadCommentRepository = loadCommentRepository;
  }

  async load(postId: number) {
    return await this.loadCommentRepository.load(postId);
  }
}
