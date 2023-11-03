import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'code-preview',
  styleUrl: 'code-preview.scss',
})
export class CodePreview {
  @Prop()
  code: string[];

  /**
   * @returns A table strings line by line.
   * Uses {index + 1} to display the line number.
   */
  render() {
    if (!this.code || this.code.length === 0) {
      return null;
    }

    return (
      <tbody>
        {this.code.map((row: string, index: number) => <tr>
          <td>{index + 1}</td>  <td>{row}</td>
        </tr>)}
      </tbody>
    );
  }

}
