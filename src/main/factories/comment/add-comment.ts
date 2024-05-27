import { CommentInfra } from "@/infra/comment/comment-infra";
import { AddCommentController } from "@/modules/comment/controller/add-comment/add-comment";
import { AddCommentUseCase } from "@/modules/comment/use-case/add-comment/add-comment";

export const addCommentFactory = (): AddCommentController => {
  return new AddCommentController(new AddCommentUseCase(new CommentInfra()));
};
