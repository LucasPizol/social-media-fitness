import { DisableExerciseById } from "@/domain/use-case/exercise/disable-exercise-by-id";
import { badRequest, created, serverError } from "@/main/helpers/http";
import { Controller } from "@/main/protocols/controller";
import { HttpRequest, HttpResponse } from "@/main/protocols/http";
import { validateBodyFields } from "@/utils/validate-body-fields";

export class DisableExerciseByIdController implements Controller {
  private readonly disableExerciseByIdUseCase: DisableExerciseById;

  constructor(disableExerciseByIdUseCase: DisableExerciseById) {
    this.disableExerciseByIdUseCase = disableExerciseByIdUseCase;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.user;
      const params = httpRequest.params;

      if (!user) return badRequest(new Error("user"));
      if (!params?.id) return badRequest(new Error("Param ID not recieved"));
      const data = validateBodyFields<{ isActive: boolean }>(
        [{ key: "isActive", type: "boolean", required: true }],
        httpRequest.body
      );

      const response = await this.disableExerciseByIdUseCase.disableById(
        params.id,
        user.id,
        data.isActive
      );
      return created(response);
    } catch (error) {
      return serverError(error);
    }
  }
}
