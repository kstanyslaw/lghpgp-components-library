import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'metadata-header',
  styleUrl: 'metadata-header.css',
  shadow: true,
})
export class MetadataHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
