import { Component, Prop, h } from '@stencil/core';
import { DUMMY_CODE } from '../../utils/utils';
import { gitFileSVG } from '../../common/components/svg';

@Component({
  tag: 'single-file-view',
  styleUrls: ['single-file-view.scss'],
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
            {gitFileSVG}
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
