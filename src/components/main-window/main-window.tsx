import { Component, h, Prop } from '@stencil/core';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { IGistItem, IUserData } from '../../common/interfaces';
import { mainWindowFactory } from './main-window.factory';

@Component({
  tag: 'main-window',
  styleUrl: 'main-window.scss',
})
export class MainWindow {
  @Prop()
  whatToDisplay: DisplayVariants = DisplayVariants.List;

  @Prop()
  isLoading: boolean;

  // If selected LIST
  @Prop()
  userMetadata?: IUserData;

  @Prop()
  gistsList?: IGistItem[];

  @Prop()
  currentPage?: number = 1;

  @Prop()
  lastPageReached?: boolean = false;

  @Prop()
  allGistsNumber?: number | null = null;

  // If selected GIST
  @Prop()
  singleGist?: IGistItem;

  @Prop()
  backToUserLogin?: string;

  get windowElements(): {headerEl: HTMLElement, contentEl: HTMLElement} {
    return mainWindowFactory(
      this.whatToDisplay,
      this.isLoading,
      this.userMetadata,
      this.allGistsNumber,
      this.backToUserLogin,
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
