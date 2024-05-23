import { BadRequestError } from "@/protocols/errors/bad-request";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  LoadExercise,
  handleErr,
  ok,
} from "./load-exercise-protocols";

export class LoadExerciseController implements Controller {
  private readonly loadExerciseUseCase: LoadExercise;

  constructor(loadExerciseUseCase: LoadExercise) {
    this.loadExerciseUseCase = loadExerciseUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) throw new BadRequestError("User not found");

      const response = await this.loadExerciseUseCase.load(user.id);
      return ok(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
