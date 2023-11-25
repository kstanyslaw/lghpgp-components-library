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
    this.goToGist.emit(this.gistListItem?.gistId );
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
          <metadata-header
            filesNumber={this.gistListItem.filesNumber}
            forksNumber={this.gistListItem.forks}
            commentsNumber={this.gistListItem.commentsNumber}
            starsNumber={this.gistListItem.stars}
            fileName={this.gistListItem.firstFileName}
            userName={this.gistListItem.userName}
            userNameUrl={this.gistListItem.userNameUrl}
            userAvatarUrl={this.gistListItem.userAvatarUrl}
            gistId={this.gistListItem.gistId}
            isSecret={this.gistListItem.isSecret}
            lastActive={this.gistListItem.lastActive}
          />
        </div>

        <div class={'code-preview-border'} onClick={this.goToGistHandler.bind(this)}>
          <code-preview code={this.codePreviewRaw} codeLang={this.gistListItem.codeLang}/>
        </div>
      </Host>
    );
  }

}
