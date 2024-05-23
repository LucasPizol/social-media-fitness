import { ErrorHandler } from "../error-handler";

export class NotAuthorizedError extends ErrorHandler {
  throwErr() {
    return {
      statusCode: 401,
      message: this.message,
      type: "NOT_AUTHORIZED",
    };
  }
}
