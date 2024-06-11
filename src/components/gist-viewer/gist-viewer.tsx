import { Component, Host, Prop, h } from '@stencil/core';
import { IGistFile, IGistFileInsert } from '../../common/interfaces';
import { IGistItem } from '../../common/interfaces';


/**
 * A component shows single gist with all files in it and descriotion
 * Also this component intercepts gist ID to event when user choose a file
 * form gist
 * @prop {IGistFile} singleGist
 * @method selectFileInsertInterceptor - intercepts gist ID
 */
@Component({
  tag: 'gist-viewer',
  styleUrl: 'gist-viewer.scss',
  shadow: true,
})
export class GistViewer {
  @Prop()
  singleGist: IGistItem;

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
