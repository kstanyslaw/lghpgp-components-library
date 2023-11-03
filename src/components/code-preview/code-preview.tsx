import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'code-preview',
  styleUrl: 'code-preview.css',
  shadow: true,
})
export class CodePreview {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
