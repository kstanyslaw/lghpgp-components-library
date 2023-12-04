import { IGistMetadata } from "./gist-data.interface";

/**
 * @param {string} description - gist description
 * @param {string[]} codePreviewRaw - an array of first ten rows of the first
 * file in the gist just for preview what it is
 * @param {string} codeLang - first file code language
 */
export interface IGistListItem {

  /**
   * @type {IGistMetadata} gistMetadata - gist ID, description and other
   * data accompanying the gist and not directly related to the code
   */
  gistMetadata: IGistMetadata;

  /**
   * @type {string} description - gist description
  */
  description: string;

  /**
  * @type {string[]} - an array of first ten rows of the first file in the gist just *  for preview what it is
  */
  codePreviewRaw: string[];
  codeLang: string;
}
