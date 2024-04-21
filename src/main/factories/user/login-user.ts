import { UserInfra } from "@/infra/user/user-infra";
import { Controller } from "@/main/protocols/controller";
import { LoginUserController } from "@/modules/user/controller/login-user/login-user";
import { AddUserUseCase } from "@/modules/user/use-case/add-user/add-user";
import { LoadUserByEmailUseCase } from "@/modules/user/use-case/load-user-by-email/load-user-by-email";
import { LoginUserUseCase } from "@/modules/user/use-case/login-user/login-user";
import { BcryptHelper } from "@/services/implementations/bcrypt/bcrypt-helper";
import { JWTHelper } from "@/services/implementations/jwt/jwt-helper";

export const loginUserFactory = (): Controller => {
  const userInfra = new UserInfra();

  return new LoginUserController(
    new LoginUserUseCase(
      new AddUserUseCase(userInfra),
      new LoadUserByEmailUseCase(userInfra),
      new BcryptHelper(),
      new JWTHelper()
    )
  );
};
