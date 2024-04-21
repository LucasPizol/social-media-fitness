export interface PostModel {
  id: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  disabledAt: Date;
  isActive: boolean;
}

export interface AddPostModel {
  content: string;
  userId: string;
}
