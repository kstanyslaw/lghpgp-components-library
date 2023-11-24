import { Component, Host, Prop, h } from '@stencil/core';
import { IGistMetadata } from '../../common/interfaces/gist-data.interface';
import { IGistFile } from '../../common/interfaces/gist-file.interface';

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

  render() {
    return (
      <Host>
        <metadata-header
          fileName={this.gistMetadata.fileName}
          isSecret={this.gistMetadata.isSecret}
          userName={this.gistMetadata.userName}
          gistUrl={''}
          lastActive={this.gistMetadata.lastActive}
          userNameUrl={''}
          userAvatarUrl={this.gistMetadata.userAvatarUrl}
          class={'mb-4'}
        />

        <hr class={'horisontal-line mb-4'}/>

        {!!this.gistFiles ? (
          <ul class={'list-no-decoration'}>
          {this.gistFiles.map((file: IGistFile) =>
          <li class={'mb-4'}>
            <single-file-view
              code={file.code}
              codeLang={file.codeLang}
              filename={file.fileName}
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
