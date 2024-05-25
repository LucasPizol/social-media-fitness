import { RequestHandler } from "express";

export interface MulterProtocols {
  handleSingleFile: (key: string) => RequestHandler;
  handleMultipleFiles: (key: string) => RequestHandler;
}
