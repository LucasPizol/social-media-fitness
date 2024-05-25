import { MulterProtocols } from "@/services/protocols/multer/multer-protocols";
import crypto from "crypto";
import { RequestHandler } from "express";
import multer, { StorageEngine } from "multer";
import { resolve } from "path";

export class MulterHelper implements MulterProtocols {
  private readonly storageEngine: StorageEngine;

  constructor(folder: string) {
    this.storageEngine = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, resolve(__dirname, "..", "..", "..", "..", folder));
      },
      filename: (req, file, cb) => {
        const fileHash = crypto.randomBytes(16).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;
        cb(null, fileName);
      },
    });
  }

  handleSingleFile(key: string): RequestHandler {
    const upload = multer({ storage: this.storageEngine });
    return upload.single(key);
  }

  getStorageEngine(): StorageEngine {
    return this.storageEngine;
  }

  handleMultipleFiles(key: string): RequestHandler {
    const upload = multer({ storage: this.storageEngine });
    return upload.array(key);
  }
}
