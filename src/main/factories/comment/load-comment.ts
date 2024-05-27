import { CommentInfra } from "@/infra/comment/comment-infra";
import { LoadCommentController } from "@/modules/comment/controller/load-comment/load-comment";
import { LoadCommentUseCase } from "@/modules/comment/use-case/load-comment/load-comment";

export const loadCommentFactory = (): LoadCommentController => {
  return new LoadCommentController(new LoadCommentUseCase(new CommentInfra()));
};
