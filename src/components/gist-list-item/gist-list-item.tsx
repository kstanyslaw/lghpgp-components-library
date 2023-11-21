import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { IGistListItem } from '../../common/interfaces/gist-list-item.interface';

@Component({
  tag: 'gist-list-item',
  styleUrl: 'gist-list-item.scss',
  // shadow: true,
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
            files={this.gistListItem.filesNumber}
            forks={this.gistListItem.forks}
            comments={this.gistListItem.commentsNumber}
            stars={this.gistListItem.stars}
            fileName={this.gistListItem.firstFileName}
            userName={this.gistListItem.userName}
            userNameUrl={this.gistListItem.userNameUrl}
            avatarUrl={this.gistListItem.avatarUrl}
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
