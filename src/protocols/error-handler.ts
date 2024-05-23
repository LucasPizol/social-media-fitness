export interface ErrorHandlerProtocols {
  throwErr: () => {
    message: string;
    statusCode: number;
    type: string;
  };
}

export class ErrorHandler implements ErrorHandlerProtocols {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  throwErr() {
    return {
      message: this.message,
      statusCode: 500,
      type: "INTERNAL_SERVER_ERROR",
    };
  }
}
