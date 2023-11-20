import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'metadata-header',
  styleUrl: 'metadata-header.scss',
  // shadow: true,
})
export class MetadataHeader {

  files: number;
  forks: number;
  comments: number;
  stars: number;

  render() {
    // TEST
    this.files = 1;
    this.forks = 0;
    this.comments = 3;
    this.stars = 2;
    // TEST

    return (
      <Host class={'d-flex space-between'}>
        <div class={'d-flex items-center flex-order-1 left'}>
          <div class={'avatar'}></div>
          <div class={'d-inline-block px-lg-2'}>
            <span>
              <a href='#'>name</a>
              {' / '}
              <a href='#'><strong>file</strong></a>

              <span title='Only those with the link can see this gist.' class={"label"}>Secret</span>
            </span>

            <div class={'fg-color-muted fg-small'}>Last active <relative-time>month ago</relative-time> </div>
          </div>
        </div>

        <ul class={'d-flex flex-order-2 right fg-color-muted fg-small'}>
          <li class={'d-flex px-lg-2'}>
            {<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
              <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
            </svg>}
            {this.files} files</li>
          <li class={'d-flex px-lg-2'}>
            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            {this.forks} forks</li>
          <li class={'d-flex px-lg-2'}>
            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
              <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
            </svg>
            {this.comments} comments</li>
          <li class={'d-flex px-lg-2'}>
            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            {this.stars} stars</li>
        </ul>
      </Host>
    );
  }

}
