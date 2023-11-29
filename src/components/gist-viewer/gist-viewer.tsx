import { Component, Host, Prop, h } from '@stencil/core';
import { IGistMetadata } from '../../common/interfaces/gist-data.interface';
import { IGistFile, IGistFileInsert } from '../../common/interfaces/gist-file.interface';

@Component({
  tag: 'gist-viewer',
  styleUrl: 'gist-viewer.scss',
  shadow: true,
})
export class GistViewer {
  @Prop()
  gistMetadata: IGistMetadata;

  @Prop()
  gistFiles?: IGistFile[];

  selectFileInsertInterceptor(event: CustomEvent<IGistFileInsert>) {
    event.detail.gistId = this.gistMetadata.gistId;
  }

  render() {
    return (
      <Host>
        <metadata-header
          fileName={this.gistMetadata.fileName}
          isSecret={this.gistMetadata.isSecret}
          userName={this.gistMetadata.userName}
          gistId={this.gistMetadata.gistId}
          lastActive={this.gistMetadata.lastActive}
          userNameUrl={''}
          userAvatarUrl={this.gistMetadata.userAvatarUrl}
          class={'mb-4 gist-viewer__metadata'}
        />

        <hr class={'horisontal-line mb-4'}/>
        <gist-description description={this.gistMetadata.description} />

        {!!this.gistFiles ? (
          <ul class={'list-no-decoration my-1'}>
          {this.gistFiles.map((file: IGistFile) =>
          <li class={'mb-1'}>
            <single-file-view
              code={file.code}
              codeLang={file.codeLang}
              filename={file.fileName}
              onSelectFileInsert={(event => this.selectFileInsertInterceptor(event))}
            />
          </li>)}
        </ul>
        ) : (
          <p class={'items-center'}>No files in this gist</p>
        )}

      </Host>
    );
  }

}
