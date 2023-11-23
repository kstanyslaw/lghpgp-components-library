import { Component, Host, Prop, h } from '@stencil/core';
import { DUMMY_CODE } from '../../utils/utils';

@Component({
  tag: 'single-file-view',
  styleUrl: 'single-file-view.scss',
  shadow: true,
})
export class SingleFileView {

  @Prop()
  filename: string;

  @Prop()
  code?: string[] = DUMMY_CODE;

  render() {
    return (
      <div class={'file-view'}>
        <div class={'file-view__header d-flex'}>
          <div class={'file-view__filename d-flex'}>
          {<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon">
              <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
            </svg>}
             {this.filename}
          </div>

          <button hidden>Raw</button>
        </div>
        <code-preview
          code={this.code}
          codeLang='javascript'
        />
      </div>
    );
  }

}
