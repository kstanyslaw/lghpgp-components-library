import { Component, h, Prop } from '@stencil/core';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { IGistItem, IUserData } from '../../common/interfaces';
import { mainWindowFactory } from './main-window.factory';

/**
 * @prop {DisplayVariants} whatToDisplay - two variants: List or Gist
 * @prop {boolean} isLoading - condition of fetching data. Affects what will be shown:
 * loading skeleton or data
 *
 * This properties only needed if List selected for display
 * @prop {IUserData} userMetadata - gists's owner data
 * @prop {IGistItem[]} gistsList - a page with a list of gists
 * @prop {number} currentPage - a number of showing page
 * @prop {boolean} lastPageReached - an indicator that last page was reached
 * @prop {number | null} allGistsNumber - a number of gists. This number is given whenever it possible
 *
 * This properties only needed if Gist selected for display
 * @prop {IGistItem} singleGist
 * @prop {string} backToUserLogin - a user login, the list of files of which should be returned
 * by pressing the back button
 */
@Component({
  tag: 'main-window',
  styleUrl: 'main-window.scss',
  scoped: true
})
export class MainWindow {
  /**
   * @type {DisplayVariants} two variants: List or Gist
   */
  @Prop()
  whatToDisplay: DisplayVariants = DisplayVariants.List;

  /**
   * @type {boolean} - condition of fetching data. Affects what will be shown:
   * loading skeleton or data
   */
  @Prop()
  isLoading: boolean;

  // If selected LIST
  /**
   * @type {IUserData} - gists's owner data [for LIST]
   */
  @Prop()
  userMetadata?: IUserData;

  /**
   * @type {IGistItem[]} - a page with a list of gists [for LIST]
   */
  @Prop()
  gistsList?: IGistItem[];

  /**
   * @type {number} - a number of showing page [for LIST]
   */
  @Prop()
  currentPage?: number = 1;

  /**
   * @type {boolean} - an indicator that last page was reached [for LIST]
   */
  @Prop()
  lastPageReached?: boolean = false;

  /**
   * @type {number | null} - a number of gists. This number is given whenever it possible  [for LIST]
   */
  @Prop()
  allGistsNumber?: number | null = null;

  // If selected GIST
  /**
   * @type {IGistItem} [for GIST]
   */
  @Prop()
  singleGist?: IGistItem;

  /**
   * @type {string} - a user login, the list of files of which should be returned
   * by pressing the back button [for GIST]
   */
  @Prop()
  backToUserLogin?: string;

  get windowElements(): {headerEl: HTMLElement, contentEl: HTMLElement} {
    return mainWindowFactory(
      this.whatToDisplay,
      this.isLoading,
      this.userMetadata,
      this.gistsList,
      this.currentPage,
      this.lastPageReached,
      this.allGistsNumber,
      this.singleGist,
      this.backToUserLogin,
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
