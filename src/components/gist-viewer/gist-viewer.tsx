import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gist-viewer',
  styleUrls: ['gist-viewer.scss'],
  shadow: true,
})
export class GistViewer {

  render() {
    return (
      <Host>
        Hello gist viewer
        <slot></slot>
      </Host>
    );
  }

}
