/**
 * @param {string} userLogin - user login
 * @param {string} userAvatarUrl - a link to user avatar (if avaliable)
 * @param {number} allGistsNumber - number of user's gists
 */
export interface IUserData {
  /**
   * @type {string} userLogin - user login
   */
  userLogin: string;

    /**
   * @type {string} userAvatarUrl - a link to user avatar (if avaliable)
   */
  userAvatarUrl?: string;

  /**
   * @type {number} allGistsNumber - number of user's gists
   */
  allGistsNumber?: number;
}
