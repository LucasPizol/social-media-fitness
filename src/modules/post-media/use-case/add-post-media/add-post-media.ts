import { AddPostMediaModel } from "@/domain/model/post-media";
import { AddPostMediaRepository } from "@/domain/repository/post-media/add-post-media-repository";
import { AddPostMedia } from "@/domain/use-case/post-media/add-post-media";
import { File } from "@/protocols/http";
import { S3SendProtocols } from "@/services/protocols/aws/aws-protocols";

export class AddPostMediaUseCase implements AddPostMedia {
  private readonly addPostMediaRepository: AddPostMediaRepository;
  private readonly sendS3Helper: S3SendProtocols;

  constructor(
    addPostMediaRepository: AddPostMediaRepository,
    sendS3Helper: S3SendProtocols
  ) {
    this.addPostMediaRepository = addPostMediaRepository;
    this.sendS3Helper = sendS3Helper;
  }

  async add(data: Omit<AddPostMediaModel, "url">, files: File[]) {
    const promises = files.map((file) =>
      this.sendS3Helper.s3send(file, "images", {
        ContentType: "image/",
      })
    );

    const resolvedPromise = await Promise.all(promises);

    return await this.addPostMediaRepository.add(
      resolvedPromise.map((url) => ({ ...data, url }))
    );
  }
}
