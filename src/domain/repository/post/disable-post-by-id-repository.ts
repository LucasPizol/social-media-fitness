export interface DisablePostByIdRepository {
  disableById(id: string, userId: string): Promise<void>;
}
