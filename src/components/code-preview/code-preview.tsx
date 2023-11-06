import { Component, Prop, h } from '@stencil/core';

/**
 * @param {string[]} code - A property that takes an array of lines of code
 * @param {string} lang - A programing language of this code
 * @returns A table of strings line by line.
 * Uses {index + 1} to display the line number.
 */
@Component({
  tag: 'code-preview',
  styleUrl: 'code-preview.scss',
})
export class CodePreview {

  /**
   * @type {string[]}
   */
  @Prop()
  code: string[];

  /**
   * @type {string}
   */
  @Prop()
  lang: string;

  get codeHighlightClass (): string {
    // TO-DO: call for method in utils to get the right code highlights css class
    return 'language-javascript'; //TO-DO;
  }

  render() {
    if (!this.code || this.code.length === 0) {
      return null;
    }

    return (
      <tbody>
        {this.code.map((row: string, index: number) => <tr>
          <td>{index + 1}</td>  <td class={'blob-code-inner ' + this.codeHighlightClass}>{row}</td>
        </tr>)}
      </tbody>
    );
  }

}
