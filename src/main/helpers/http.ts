import { ErrorHandler } from "@/protocols/error-handler";

export const ok = (body: any) => ({
  statusCode: 200,
  body,
});

export const created = (body: any) => ({
  statusCode: 201,
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
    body: "UNCAUGHT_EXCEPTION: " + error.message || "No description",
  };
};
