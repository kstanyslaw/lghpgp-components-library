/**
 * @implements single gist file
 * @param {string} fileName
 * @param {string[]} code - an array of code rows of file
 * @param {string} codeLang - code programming language
 */
export interface IGistFile {
  /**
   * @type {string}
   */
  fileName: string;

  /**
   * @type {string[]} code - an array of code rows of file
   */
  code: string[];

  /**
   * @type {string} codeLang - code programming language
   */
  codeLang: string;
}

/**
 * @interface IGistFileInsert - describes which file the user has selected for
 * insertion
 * @param {string} gistId - gist ID
 */
export interface IGistFileInsert extends IGistFile {
  gistId?: string;
}
