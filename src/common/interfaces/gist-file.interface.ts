export interface IGistFile {
  fileName: string;
  code: string[];
  codeLang: string;
}

export interface IGistFileInsert extends IGistFile {
  gistId?: string;
}
