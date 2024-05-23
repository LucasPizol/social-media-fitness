import {
  Controller,
  HttpRequest,
  HttpResponse,
  UpdateExerciseById,
  badRequest,
  handleErr,
  ok,
} from "./update-exercise-by-id-protocols";

export class UpdateExerciseByIdController implements Controller {
  private readonly updateExerciseByIdUseCase: UpdateExerciseById;

  constructor(updateExerciseByIdUseCase: UpdateExerciseById) {
    this.updateExerciseByIdUseCase = updateExerciseByIdUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;
      const data = httpRequest.body;
      const params = httpRequest.params;

      if (!user) return badRequest(new Error("User not found"));
      if (!params.id) return badRequest(new Error("Params ID not found"));
      if (data.id !== undefined)
        return badRequest(new Error("You're trying to update the ID"));

      const response = await this.updateExerciseByIdUseCase.updateById(
        params.id,
        user.id,
        data
      );
      return ok(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
