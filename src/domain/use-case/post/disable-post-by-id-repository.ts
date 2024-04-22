export interface DisablePostById {
  disableById(id: string, userId: string): Promise<void>;
}
