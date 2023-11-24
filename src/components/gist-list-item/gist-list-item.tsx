import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { IGistListItem } from '../../common/interfaces/gist-list-item.interface';

@Component({
  tag: 'gist-list-item',
  styleUrl: 'gist-list-item.scss',
})
export class GistListItem {
  @Event()
  gistSelected: EventEmitter<string>;

  @Prop()
  gistListItem: IGistListItem;

  gistSelectedHandler() {
    this.gistSelected.emit(this.gistListItem?.gistId );
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
            gistUrl={this.gistListItem.gistUrl}
            isSecret={this.gistListItem.isSecret}
            lastActive={this.gistListItem.lastActive}
          />
        </div>

        <div class={'code-preview-border'} onClick={this.gistSelectedHandler.bind(this)}>
          <code-preview code={this.gistListItem.codePreviewRaw} codeLang={this.gistListItem.codeLang}/>
        </div>
      </Host>
    );
  }

}
