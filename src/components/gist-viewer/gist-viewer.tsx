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
