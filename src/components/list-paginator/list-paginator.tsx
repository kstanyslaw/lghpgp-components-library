import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

/**
 * @prop {number} currentPage
 * @prop {boolean} lastPage - a condition that indicates if last page has been reached
 * @event goToPage emits next page number
 */
@Component({
  tag: 'list-paginator',
  styleUrl: 'list-paginator.scss',
})
export class ListPaginator {

  /**
   * @type {number}
   */
  @Prop()
  currentPage: number;

  /**
   * @type {boolean} a condition that indicates if last page has been reached
   */
  @Prop()
  lastPage: boolean;

  /**
   * @event goToPage emits next page number
   */
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
