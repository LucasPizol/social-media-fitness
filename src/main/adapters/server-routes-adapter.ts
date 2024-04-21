import { Response } from "express";
import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/http";

export const adaptRoute = (controller: Controller) => {
  return async (req: HttpRequest, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query,
      user: req.user,
    };

    const httpResponse = await controller.handle(httpRequest);

    res.status(httpResponse.statusCode);

    if (httpResponse.statusCode === 500) {
      res.send({ error: "ERROR: " + httpResponse.body.message });
    } else if (
      httpResponse.statusCode >= 400 &&
      httpResponse.statusCode < 500
    ) {
      res.send({ error: httpResponse.body.message });
    } else {
      res.send(httpResponse.body);
    }
  };
};
