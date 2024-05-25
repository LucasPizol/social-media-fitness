import env from "@/main/config/env";
import { ErrorHandler } from "@/protocols/error-handler";
import { BadRequestError } from "@/protocols/errors/bad-request";
import { File } from "@/protocols/http";
import {
  S3DeleteProtocols,
  S3SendProtocols,
} from "@/services/protocols/aws/aws-protocols";
import {
  DeleteObjectCommand,
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3";
import crypto from "crypto";
import fs from "fs";

export class AWSHelper implements S3SendProtocols, S3DeleteProtocols {
  private readonly client: S3Client;

  constructor() {
    if (!env.s3.public_key || !env.s3.secret_key || !env.s3.url) {
      throw new Error("[ERROR] AWS credentials not configured");
    }

    this.client = new S3Client({
      credentials: {
        accessKeyId: env.s3.public_key,
        secretAccessKey: env.s3.secret_key,
      },
      region: "sa-east-1",
    });
  }

  async s3send(
    file: Pick<File, "originalname" | "path">,
    folder: string,
    options?: Omit<PutObjectCommandInput, "Body" | "Bucket" | "Key" | "ACL">
  ): Promise<string> {
    if (!env.s3.url) throw new ErrorHandler("url not configured");

    const readStream = fs.createReadStream(file.path);
    const filenameSplited = file.originalname.split(".");
    const extension = filenameSplited[filenameSplited.length - 1];

    const key =
      folder +
      "/" +
      `${new Date().toISOString()}-${crypto
        .randomBytes(16)
        .toString("hex")}.${extension}`;

    const putS3Options: PutObjectCommandInput = {
      Body: readStream,
      Bucket: "fit-connect-v1",
      Key: key,
      ACL: "public-read",
      ...options,
    };

    const putS3Command = new PutObjectCommand(putS3Options);

    try {
      await this.client.send(putS3Command);
      fs.unlinkSync(file.path);
      return `${env.s3.url}${key}`;
    } catch (err) {
      throw new BadRequestError("Error while uploading file");
    }
  }

  async s3delete(url: string): Promise<void> {
    if (!env.s3.url) return;

    const splitUrl = url.split(env.s3.url);

    const splittedEndpoint = splitUrl[1].split("/");

    const folder = splittedEndpoint.slice(0, splittedEndpoint.length - 1);
    const filename = splittedEndpoint[splittedEndpoint.length - 1];

    const deleteCommand = new DeleteObjectCommand({
      Bucket: "fit-connect-v1",
      Key: folder + "/" + filename,
    });

    try {
      await this.client.send(deleteCommand);
    } catch (err) {
      throw new BadRequestError("Error while deleting file");
    }
  }
}
