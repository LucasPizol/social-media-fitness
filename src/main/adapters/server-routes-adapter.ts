import { Controller } from "@/protocols/controller";
import { HttpRequest } from "@/protocols/http";
import { Response } from "express";
import { ServerRoutesProtocolAdapter } from "./server-routes-adapter-protocol";

export const adaptRoute = (controller: Controller) => {
  return async (req: ServerRoutesProtocolAdapter, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
      user: req.user,
      file: req.file,
      files: req.files,
    };

    const httpResponse = await controller.handle(httpRequest);

    res.status(httpResponse.statusCode);

    if (
      httpResponse.statusCode === 500 ||
      (httpResponse.statusCode >= 400 && httpResponse.statusCode < 500)
    ) {
      res.send({
        error: httpResponse.body,
        type: httpResponse.type,
      });
    } else {
      res.send(httpResponse.body);
    }
  };
};
