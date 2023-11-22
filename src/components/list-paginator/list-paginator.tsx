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
        <button disabled class={'btn-pagination'}>Newer</button>
        <button class={'btn-pagination'}>Older</button>
      </Host>
    );
  }

}
