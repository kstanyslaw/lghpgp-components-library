import { Component, Host, h } from '@stencil/core';
import { DUMMY_CODE } from '../../utils/utils';

@Component({
  tag: 'gist-list-item',
  styleUrl: 'gist-list-item.scss',
  // shadow: true,
})
export class GistListItem {

  render() {
    return (
      <Host>
        <metadata-header
          files={0}
          forks={0}
          comments={0}
          stars={0}
          fileName='promisify.js'
          userName='kstanyslaw'
          avatarUrl='https://avatars.githubusercontent.com/u/15340653?v=4'
          gistUrl='#'
          userNameUrl='#'
          isSecret={true}
          lastActive={new Date("2023-10-24T11:53:42Z")}
        />
        <code-preview code={DUMMY_CODE} codeLang='javascript'/>
      </Host>
    );
  }

}
