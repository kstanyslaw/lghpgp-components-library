import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gist-viewer',
  styleUrl: 'gist-viewer.scss',
  shadow: true,
})
export class GistViewer {
  @Prop()
  gistData: any; // TODO Interface

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

        {this.gistData?.files ? (
          <ul>
          {this.gistData.files.map((file: any) => <li>
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
