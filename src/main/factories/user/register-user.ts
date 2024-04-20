import { UserInfra } from "@/infra/user/user-infra";
import { RegisterUserController } from "@/modules/user/controller/register-user/register-user";
import { RegisterUserUseCase } from "@/modules/user/use-case/register-user/register-user";
import { BcryptHelper } from "@/services/implementations/bcrypt/bcrypt-helper";
import { JWTHelper } from "@/services/implementations/jwt/jwt-helper";

export const registerUserFactory = () => {
  return new RegisterUserController(
    new RegisterUserUseCase(
      new UserInfra(),
      new BcryptHelper(),
      new JWTHelper()
    )
  );
};
