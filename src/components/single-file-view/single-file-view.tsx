import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { IGistFile, IGistFileInsert } from '../../common/interfaces';
import { arrowLeftSVG, gitFileSVG, listColoumnReverseSVG, peaseOfCodeSVG } from '../../common/components/svg';

/**
 * A component shows single file in a gist and emits this file data by click
 * @prop {string} filename
 * @prop {string[]} code - an arary of code from file line by line
 * @prop {string} codeLang - code language
 * @event selectFileInsert - event that emits file data object
 */
@Component({
  tag: 'single-file-view',
  styleUrls: ['single-file-view.scss'],
  shadow: true,
})
export class SingleFileView {

  /**
   * @type {string}
   */
  @Prop()
  filename: string;

  /**
   * @type {string[]} - an arary of code from file line by line
   */
  @Prop()
  code: string[];

  /**
   * @type {string} - code language
   */
  @Prop()
  codeLang: string;

  /**
   * Emits gist file data object that user clicked
   * @type {IGistFileInsert}
   * @event
   */
  @Event()
  selectFileInsert: EventEmitter<IGistFileInsert>;

  selectFileHandler(): void {
    const fileInsert: IGistFile ={
      code: this.code,
      fileName: this.filename,
      codeLang: this.codeLang,
    }
    this.selectFileInsert.emit(fileInsert);
  }

  render() {
    return (
      <div class={'file-view code-preview-border'} onClick={this.selectFileHandler.bind(this)}>
        <div class={'file-view__header d-flex'}>
          <div class={'file-view__filename d-flex'} >
            {gitFileSVG()}
            {this.filename}
          </div>

          <i class={'code-add-icon d-flex'}>
            {listColoumnReverseSVG()}
            {arrowLeftSVG()}
            {peaseOfCodeSVG()}
          </i>
        </div>
        <code-preview
          code={this.code}
          codeLang={this.codeLang}
        />
      </div>
    );
  }

}
