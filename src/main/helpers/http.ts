import { ErrorHandler } from "@/protocols/error-handler";

export const ok = (body: any) => ({
  statusCode: 200,
  body,
});

export const created = (body: any) => ({
  statusCode: 201,
  body,
});

export const badRequest = (body: Error) => ({
  statusCode: 400,
  body,
});

export const serverError = (body: any) => ({
  statusCode: 500,
  body,
});

export const forbidden = (body: Error) => ({
  statusCode: 403,
  body,
});

export const unauthorized = (body: Error) => ({
  statusCode: 401,
  body,
});

export const notFound = (body: Error) => ({
  statusCode: 404,
  body,
});

export const noContent = (body: any) => ({
  statusCode: 204,
  body,
});

export const handleErr = (error: any) => {
  if (error instanceof ErrorHandler) {
    const { message, statusCode, type } = error.throwErr();

    return { statusCode, body: message, type };
  }
  return {
    statusCode: 500,
    type: "INTERNAL_SERVER_ERROR",
    body: "UNCAUGHT_EXCEPTION",
  };
};
