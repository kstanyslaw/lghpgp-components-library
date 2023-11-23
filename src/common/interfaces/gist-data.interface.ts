export interface IGistMetadata {
  fileName: string;
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
