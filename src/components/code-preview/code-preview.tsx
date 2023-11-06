import { Component, Prop, h } from '@stencil/core';

/**
 * @param {string[]} code - A property that takes an array of lines of code
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

  render() {
    if (!this.code || this.code.length === 0) {
      return null;
    }

    return (
      <tbody>
        {this.code.map((row: string, index: number) => <tr>
          <td>{index + 1}</td>  <td class={'blob-code-inner'}>{row}</td>
        </tr>)}
      </tbody>
    );
  }

}
