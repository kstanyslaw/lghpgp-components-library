import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { IGistListItem } from '../../common/interfaces/gist-list-item.interface';

@Component({
  tag: 'gist-list-item',
  styleUrl: 'gist-list-item.scss',
})
export class GistListItem {
  @Event()
  goToGist: EventEmitter<string>;

  @Prop()
  gistListItem: IGistListItem;

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
    return this.gistListItem.codePreviewRaw.slice(0, 10);
  }

  render() {
    return (
      <Host>
        <div class={'mb-1'}>
          <metadata-header gistMetadata={this.gistListItem.gistMetadata} />

          <gist-description
            class={'fg-small fg-color-muted'}
            description={this.gistListItem.description}
          />
        </div>

        <div class={'code-preview-border'} onClick={this.goToGistHandler.bind(this)}>
          <code-preview code={this.codePreviewRaw} codeLang={this.gistListItem.codeLang}/>
        </div>
      </Host>
    );
  }

}
