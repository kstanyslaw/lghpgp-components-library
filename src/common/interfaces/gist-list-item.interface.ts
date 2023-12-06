import { IGistMetadata } from "./gist-data.interface";
import { IGistFile } from "./gist-file.interface";
import { IUserData } from "./user-metadata.interface";

/**
 * @param {string} description - gist description
 * @param {IGistMetadata} gistMetadata - gist ID, description and other
 * data accompanying the gist and not directly related to the code
 * @param {IUserMetadata} ownerData - information about the user - the owner of the gist
 * @param {IGistFile[]} files - array of files in gist
 */
export interface IGistListItem {

  /**
   * @type {IGistMetadata} gistMetadata - gist ID, description and other
   * data accompanying the gist and not directly related to the code
   */
  gistMetadata: IGistMetadata;

  /**
   * @type {IUserMetadata} ownerData - information about the user - the owner of the gist
   */
  ownerData: IUserData;

  /**
   * @type {string} description - gist description
  */
  description: string;

  /**
   * @type {IGistFile[]} files - array of files in gist
   */
  files: IGistFile[];
}
