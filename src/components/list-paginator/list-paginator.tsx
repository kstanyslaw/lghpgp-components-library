import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'list-paginator',
  styleUrl: 'list-paginator.scss',
})
export class ListPaginator {

  @Prop()
  currentPage: number;

  @Prop()
  lastPage: boolean;

  @Event()
  goToPage: EventEmitter<number>;

  clickHandler(nextPage: number) {
    this.goToPage.emit(nextPage);
  }

  render() {
    return (
      <Host>
        <button
          disabled={this.currentPage === 1}
          onClick={this.clickHandler.bind(this, this.currentPage - 1)}
          class={'btn btn-pagination'}
        >
            Newer
        </button>

        <button
          disabled={this.lastPage}
          onClick={this.clickHandler.bind(this, this.currentPage + 1)}
          class={'btn btn-pagination'}
        >
            Older
        </button>
      </Host>
    );
  }

}
