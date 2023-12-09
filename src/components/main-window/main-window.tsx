import { Component, h, Prop } from '@stencil/core';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { IGistItem } from '../../common/interfaces';
import { mainWindowFactory } from './main-window.factory';

@Component({
  tag: 'main-window',
  styleUrl: 'main-window.scss',
})
export class MainWindow {
  @Prop()
  whatToDisplay: DisplayVariants = DisplayVariants.List;

  @Prop()
  userMetadata: any;

  // If selected LIST
  @Prop()
  gistsList?: IGistItem[];

  @Prop()
  currentPage: number = 1;

  @Prop()
  lastPageReached: boolean = false;

  @Prop()
  allGistsNumber: number | null = null;

  // If selected GIST
  @Prop()
  singleGist?: IGistItem;

  get windowElements(): {headerEl: HTMLElement, contentEl: HTMLElement} {
    return mainWindowFactory(
      this.whatToDisplay,
      false,
      this.userMetadata,
      this.allGistsNumber,
      'kstanyslaw',
      this.gistsList,
      this.currentPage,
      this.lastPageReached,
      this.singleGist
    );
  }

  render() {
    const { headerEl, contentEl } = this.windowElements;

    return <main-window-layout>
      {headerEl}

      {contentEl}
    </main-window-layout>
  }

}
