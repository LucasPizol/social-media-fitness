import { ErrorHandler } from "../error-handler";

export class NotFoundError extends ErrorHandler {
  throwErr() {
    return {
      statusCode: 404,
      message: this.message,
      type: "NOT_FOUND",
    };
  }
}
