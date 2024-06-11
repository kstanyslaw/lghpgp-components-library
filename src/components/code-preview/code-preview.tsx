import { Component, Fragment, Prop, h } from '@stencil/core';
import hljs from 'highlight.js/lib/common';

/**
 * @param {string[]} code - A property that takes an array of lines of code
 * @param {string} lang - A programing language of this code
 * @returns An <pre> element with a strings of <code> line by line.
 * Uses {index + 1} to display the line number.
 * Uses Prismjs to highlight code
 */
@Component({
  tag: 'code-preview',
  styleUrl: 'code-preview.scss',
})
export class CodePreview {

  /**
   * @type {string[]} - Code Raw
   */
  @Prop()
  code: string[];

  /**
   * @type {string} - Code language
   */
  @Prop()
  codeLang: string;

  render() {
    if (!this.code || this.code.length === 0) {
      return null;
    }



    return (
      <Fragment>
        <pre>
          {this.code.map((row: string) => {
            const highlightedCode = hljs.highlight(row, { language: this.codeLang }).value;
            return <code innerHTML={highlightedCode}></code>
          })}
        </pre>
      </Fragment>
    );
  }

}
