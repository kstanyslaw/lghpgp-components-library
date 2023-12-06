import { Component, h, Prop } from '@stencil/core';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { IGistItem } from '../../common/interfaces';
import { mainWindowContentFactory, mainWindowHeaderFactory } from './main-window.factory';

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

  get windowHeader(): HTMLElement {
    const headerEl = mainWindowHeaderFactory(
      this.whatToDisplay,
      false,
      this.userMetadata,
      this.allGistsNumber,
      'kstanyslaw',
      this.singleGist
    );

    return headerEl;
  }

  get windowContent(): HTMLElement {
    const contentEl = mainWindowContentFactory(
      this.whatToDisplay,
      false,
      this.gistsList,
      this.currentPage,
      this.lastPageReached,
      this.singleGist
    );

    return contentEl;
  }

  render() {

    return <main-window-layout>
      {this.windowHeader}

      {this.windowContent}
    </main-window-layout>
  }

}
