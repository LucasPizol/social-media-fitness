import { UserInfra } from "@/infra/user/user-infra";
import { LoadUserByIdController } from "@/modules/user/controller/load-user-by-id/load-user-by-id";
import { LoadUserByIdUseCase } from "@/modules/user/use-case/load-user-by-id/load-user-by-id";
import { Controller } from "@/protocols/controller";

export const loadUserByIdFactory = (): Controller => {
  return new LoadUserByIdController(new LoadUserByIdUseCase(new UserInfra()));
};
