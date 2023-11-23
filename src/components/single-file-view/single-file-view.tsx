import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
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
  code: string[];

  @Prop()
  codeLang: string;

  @Event()
  selectFileInsert: EventEmitter<{
    code: string[],
    fileName: string,
    codeLang: string,
  }>;

  selectFileHandler() {
    const fileInsert ={
      code: this.code,
      fileName: this.filename,
      codeLang: this.codeLang,
    }
    this.selectFileInsert.emit(fileInsert);
  }

  render() {
    return (
      <div class={'file-view'}>
        <div class={'file-view__header d-flex'}>
          <div class={'file-view__filename d-flex'} >
            {gitFileSVG()}
            {this.filename}
          </div>

          <button onClick={this.selectFileHandler.bind(this)}>Insert</button>
        </div>
        <code-preview
          code={this.code}
          codeLang={this.codeLang}
        />
      </div>
    );
  }

}
