import { ErrorHandler } from "../error-handler";

export class ConflictError extends ErrorHandler {
  throwErr() {
    return {
      statusCode: 409,
      message: this.message,
      type: "CONFLICT",
    };
  }
}
