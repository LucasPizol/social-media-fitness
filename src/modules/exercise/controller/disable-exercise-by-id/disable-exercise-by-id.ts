import { DisableExerciseById } from "@/domain/use-case/exercise/disable-exercise-by-id";
import { created, handleErr } from "@/main/helpers/http";
import { Controller } from "@/protocols/controller";
import { BadRequestError } from "@/protocols/errors/bad-request";
import { HttpRequest, HttpResponse } from "@/protocols/http";
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

      if (!user) throw new BadRequestError("user");
      if (!params?.id) throw new BadRequestError("Param ID not recieved");
      const data = validateBodyFields<{ isDisabled: boolean }>(
        [{ key: "isDisabled", type: "boolean", required: true }],
        httpRequest.body
      );

      const response = await this.disableExerciseByIdUseCase.disableById(
        params.id,
        user.id,
        data.isDisabled
      );
      return created(response);
    } catch (error) {
      return handleErr(error);
    }
  }
}
