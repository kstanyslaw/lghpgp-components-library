import { Component, Host, Prop, h } from '@stencil/core';
import { IGistFile, IGistFileInsert } from '../../common/interfaces/gist-file.interface';
import { IGistListItem } from '../../common/interfaces/gist-list-item.interface';

@Component({
  tag: 'gist-viewer',
  styleUrl: 'gist-viewer.scss',
  shadow: true,
})
export class GistViewer {
  @Prop()
  singleGist: IGistListItem

  selectFileInsertInterceptor(event: CustomEvent<IGistFileInsert>) {
    event.detail.gistId = this.singleGist.gistMetadata.gistId;
  }

  render() {

    let {
      files,
      description
    } = this.singleGist;

    return (
      <Host>
        <gist-description description={description} />

        {!!files ? (
          <ul class={'list-no-decoration my-1'}>
          {files.map((file: IGistFile) =>
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
