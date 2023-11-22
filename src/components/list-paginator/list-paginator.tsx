import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'list-paginator',
  styleUrl: 'list-paginator.scss',
  shadow: true,
})
export class ListPaginator {

  render() {
    return (
      <Host>
        <button disabled>Newer</button>
        <button>Older</button>
      </Host>
    );
  }

}
