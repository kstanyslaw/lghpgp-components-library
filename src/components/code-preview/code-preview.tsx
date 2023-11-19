import { Component, Prop, h } from '@stencil/core';
import Prism from 'prismjs';

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
  codeLang: string;

  render() {
    if (!this.code || this.code.length === 0) {
      return null;
    }

    return (
      <pre>
        {this.code.map((row: string) => {
          const highlighted = Prism.highlight(row, Prism.languages[this.codeLang], this.codeLang);
          return <code innerHTML={highlighted} class={'lang-js'}></code>
        })}
      </pre>
    );
  }

}
