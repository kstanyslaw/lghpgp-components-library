import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gists-list',
  styleUrl: 'gists-list.scss',
  shadow: true,
})
export class GistsList {

  render() {
    return (
      <Host>
        gists list
        <slot></slot>
      </Host>
    );
  }

}
