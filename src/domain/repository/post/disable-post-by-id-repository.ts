export interface DisablePostByIdRepository {
  disableById(id: number, userId: number): Promise<void>;
}
