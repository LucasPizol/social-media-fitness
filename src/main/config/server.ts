import cors from "cors";
import express, { Application } from "express";
export const serverConfig = (app: Application) => {
  app.use(cors());
  app.use(express.json());
  return app;
};
