export interface DisablePostById {
  disableById(id: number, userId: number): Promise<void>;
}
