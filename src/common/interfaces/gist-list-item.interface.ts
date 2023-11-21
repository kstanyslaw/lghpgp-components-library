export interface IGistListItem {
  description: string;
  filesNumber: number;
  forks: number;
  commentsNumber: number;
  stars: number;
  firstFileName: string;
  userName: string;
  avatarUrl: string;
  gistUrl: string;
  userNameUrl: string;
  isSecret: boolean;
  lastActive: Date;
  codePreviewRaw: string;
  codeLang: string;
  gistId: string;
}
