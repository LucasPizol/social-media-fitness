import { BadRequestError } from "@/protocols/errors/bad-request";
import { validateBodyFields } from "@/utils/validate-body-fields";
import { ExerciseModel } from "../../use-case/add-exercise/add-exercise-protocols";
import {
  AddExercise,
  Controller,
  HttpRequest,
  HttpResponse,
  created,
  handleErr,
} from "./add-exercise-protocols";

export class AddExerciseController implements Controller {
  private readonly addExerciseUseCase: AddExercise;

  constructor(addExerciseUseCase: AddExercise) {
    this.addExerciseUseCase = addExerciseUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;

      if (!user) throw new BadRequestError("user");

      const data = validateBodyFields<ExerciseModel>(
        [
          {
            key: "name",
            type: "string",
            required: true,
          },
        ],
        httpRequest.body
      );

      const response = await this.addExerciseUseCase.add({
        ...data,
        userId: user.id,
      });
      return created(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
