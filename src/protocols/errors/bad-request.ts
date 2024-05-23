import { ErrorHandler } from "../error-handler";

export class BadRequestError extends ErrorHandler {
  throwErr() {
    return {
      statusCode: 400,
      message: this.message,
      type: "BAD_REQUEST",
    };
  }
}
