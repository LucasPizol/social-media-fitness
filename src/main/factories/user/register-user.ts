import { UserInfra } from "@/infra/user/user-infra";
import { RegisterUserController } from "@/modules/user/controller/register-user/register-user";
import { AddUserUseCase } from "@/modules/user/use-case/add-user/add-user";
import { LoadUserByEmailUseCase } from "@/modules/user/use-case/load-user-by-email/load-user-by-email";
import { RegisterUserUseCase } from "@/modules/user/use-case/register-user/register-user";
import { BcryptHelper } from "@/services/implementations/bcrypt/bcrypt-helper";
import { JWTHelper } from "@/services/implementations/jwt/jwt-helper";

export const registerUserFactory = () => {
  const userInfra = new UserInfra();

  return new RegisterUserController(
    new RegisterUserUseCase(
      new AddUserUseCase(userInfra),
      new LoadUserByEmailUseCase(userInfra),
      new BcryptHelper(),
      new JWTHelper()
    )
  );
};
