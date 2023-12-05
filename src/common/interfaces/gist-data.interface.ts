/**
 * @param {string} gistId -gist ID
 * @param {string} firstFileName - name of first file in gist that used for gist's title btw
 * @param {Date} lastActive - date and time of last manipulation with file
 * @param {boolean} isUpdated - flag that says if the gist was updated or only created
 * @param {boolean} isSecret - flag that says is the gist secret
 * @param {number} filesNumber - number of files in the gist
 * @param {number} forksNumber - number of forks in the gist
 * @param {number} commentsNumber - number of comments in the gist
 * @param {number} starsNumber - number of stars in the gist
 */
export interface IGistMetadata {
  /**
   * @type {string} gistId
   */
  gistId: string;

  /**
   * @type {string} firstFileName - name of first file in gist that used for gist's title btw
   */
  firstFileName: string;

  /**
   * @type {Date} lastActive - date and time of last manipulation with file
   */
  lastActive: Date;

  /**
   * @type {boolean} isUpdated - flag that says if the gist was updated or only created
   */
  isUpdated: boolean;

  /**
   * @type {boolean} isSecret - flag that says is the gist secret
   */
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

}
