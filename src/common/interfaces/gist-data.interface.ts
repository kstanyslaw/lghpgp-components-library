/**
 * @param {number} filesNumber - number of files in the gist
 * @param {string} firstFileName - name of first file in gist that used for gist's title btw
 * @param {Date} lastActive - date of last manipulation with file
 */
export interface IGistMetadata {
  gistId: string;
  firstFileName: string;
  userLogin: string;
  lastActive: Date;
  isUpdated: boolean;
  isSecret: boolean;

  /**
   * @type {number} - How many files the gist contains
   */
  filesNumber?: number;

  /**
   * @type {number} - How many forks the gist have
   */
  forksNumber?: number;

  /**
   * @type {number} - How many comments the gist contains
   */
  commentsNumber?: number;

  /**
   * @type {number} - How many stars the gist have
   */
  starsNumber?: number;
  userAvatarUrl?: string;
}
