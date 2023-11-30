export interface IGistMetadata {
  gistId: string;
  fileName: string;
  description: string;
  gistUrl: string;
  userName: string;
  userNameUrl: string;
  lastActive: Date;
  isSecret: boolean;
  filesNumber?: number;
  forksNumber?: number;
  commentsNumber?: number;
  starsNumber?: number;
  userAvatarUrl?: string;
}
