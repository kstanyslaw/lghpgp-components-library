/**
 * @param {string} description - gist description
 * @param {number} filesNumber - number of files in the gist
 * @param {string} firstFileName - name of first file in gist that used for gist's title btw
 * @param {string[]} codePreviewRaw - an array of first ten rows of the first
 * file in the gist just for preview what it is
 * @param {string} codeLang - first file code language
 * @param {Date} lastActive - date of last manipulation with file
 * @param {number} forks
 * @param {number} commentsNumber
 * @param {number} stars
 * @param {string} userName
 * @param {string} userAvatarUrl
 * @param {string} gistUrl
 * @param {string} userNameUrl
 * @param {boolean} isSecret
 * @param {boolean} isUpdated
 * @param {string} gistId
 */
export interface IGistListItem {
  /**
 * @type {string} description - gist description
 */
  description: string;

  /**
   * @type {number} - How many files the gist contains
   */
  filesNumber: number;
  forks: number;
  commentsNumber: number;
  stars: number;
  firstFileName: string;
  userName: string;
  userAvatarUrl: string;
  gistUrl: string;
  userNameUrl: string;
  isSecret: boolean;
  isUpdated: boolean;
  lastActive: Date;

  /**
   * @type {string[]} - an array of first ten rows of the first file in the gist just for preview what it is
   */
  codePreviewRaw: string[];
  codeLang: string;
  gistId: string;
}
