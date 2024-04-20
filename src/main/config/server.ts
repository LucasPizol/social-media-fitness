import cors from "cors";
import express, { Application } from "express";
import { routes } from "../routes";
export const serverConfig = (app: Application) => {
  app.use(cors());
  app.use(express.json());
  app.use(routes);
  return app;
};
