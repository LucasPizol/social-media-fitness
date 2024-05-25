import { File } from "@/protocols/http";
import { PutObjectCommandInput } from "@aws-sdk/client-s3";

export interface S3SendProtocols {
  s3send: (
    file: Pick<File, "originalname" | "path">,
    folder: string,
    options?: Omit<PutObjectCommandInput, "Body" | "Bucket" | "Key" | "ACL">
  ) => Promise<string>;
}

export interface S3DeleteProtocols {
  s3delete: (url: string) => Promise<void>;
}
