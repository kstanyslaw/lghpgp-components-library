import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { IGistItem } from '../../common/interfaces';

/**
 * A component that shows metadata, description and code preview
 * of a given gist via the appropriate child components
 * @prop {IGistItem} gistListItem
 * @event goToGist emits ID of selected gist
 */
@Component({
  tag: 'gist-list-item',
  styleUrl: 'gist-list-item.scss',
})
export class GistListItem {
  @Event()
  goToGist: EventEmitter<string>;

  @Prop()
  gistListItem: IGistItem;

  goToGistHandler() {
    const gistId = this.gistListItem.gistMetadata.gistId;
    this.goToGist.emit(gistId );
  }

  /**
   * Protection getter:
   * In gists list every gist item should
   * display no more than ten lines of code first file
   */
  get codePreviewRaw(): string[] {
    return this.gistListItem.files[0].code.slice(0, 10);
  }

  get codeLang(): string {
    return this.gistListItem.files[0].codeLang;
  }

  render() {
    return (
      <Host>
        <div class={'mb-1'}>
          <metadata-header
            gistMetadata={this.gistListItem.gistMetadata}
            userData={this.gistListItem.ownerData}
          />

          <gist-description
            class={'fg-small fg-color-muted'}
            description={this.gistListItem.description}
          />
        </div>

        <div class={'code-preview-border'} onClick={this.goToGistHandler.bind(this)}>
          <code-preview code={this.codePreviewRaw} codeLang={this.codeLang}/>
        </div>
      </Host>
    );
  }

}
