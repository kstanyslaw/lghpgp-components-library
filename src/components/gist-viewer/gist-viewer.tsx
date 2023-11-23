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
  gistData: IGistMetadata;

  @Prop()
  gistFiles?: IGistFile[];

  render() {
    return (
      <Host>
        <metadata-header
          fileName={'promisify.js'}
          isSecret={this.gistData?.isSecret ?? true} //TODO
          userName={'kstanyslaw'}
          gistUrl={''}
          lastActive={new Date()}
          userNameUrl={''}
          class={'mb-4'}
        />

        <hr />

        {!!this.gistFiles ? (
          <ul>
          {this.gistFiles.map((file: IGistFile) => <li>
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
