import { h } from '@stencil/core';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { IGistItem, IUserData } from '../../components';


/**
 * A main window factory function:
 * @param {DisplayVariants} whatToDisplay - two variants: List or Gist
 * @param {boolean} isLoading - condition of fetching data. Affects what will be shown:
 * loading skeleton or data
 *
 * This properties only needed if List selected for display
 * @param {IUserData} userMetadata - gists's owner data
 * @param {IGistItem[]} gistsList - a page with a list of gists
 * @param {number} currentPage - a number of showing page
 * @param {boolean} lastPageReached - an indicator that last page was reached
 * @param {number | null} allGistsNumber - a number of gists. This number is given whenever it possible.
 *
 * This properties only needed if Gist selected for display
 * @param {IGistItem} singleGist
 * @param {string} backButtonUserLogin - a user login, the list of files of which should be returned
 * by pressing the back button
 * @returns {headerEl: HTMLElement, contentEl: HTMLElement} an object with two keys:
 * headerEl - contains header element
 * contentEl - contains main contentent element
 */
export function mainWindowFactory (
    whatToDisplay: DisplayVariants,
    isLoading: boolean,
    userMetadata?: IUserData,
    gistsList?: IGistItem[],
    currentPage?: number,
    lastPageReached?: boolean,
    allGistsNumber?: number | null,
    singleGist?: IGistItem,
    backButtonUserLogin?: string,
  ): {headerEl: HTMLElement, contentEl: HTMLElement} {
    let headerEl: HTMLElement;
    let contentEl: HTMLElement;
  switch (!isLoading) {
    case (whatToDisplay === DisplayVariants.List):
      headerEl = getListHeader(userMetadata, allGistsNumber);
      contentEl = getListContent(gistsList, currentPage, lastPageReached);
      break;

    case (whatToDisplay === DisplayVariants.Gist):
      headerEl = getGistHeader(backButtonUserLogin, singleGist);
      contentEl = getGistContent(singleGist);
      break;

    default:
      headerEl = <h1 class={'text-center'}>An error occured</h1>;
      contentEl = <h2 class={'text-center'}>No content fetched :(</h2>
      break;
  }

  return {headerEl, contentEl};
}

/**
 * Generate header by given parameters:
 * @param {IUserData} userMetadata - gists's owner data
 * @param {number | null} allGistsNumber - a number of gists. This number is given whenever it possible
 * @returns {HTMLElement} an HTML element of main window header for Gists List displaying case
 */
function getListHeader(
    userMetadata: IUserData,
    allGistsNumber: number | null
  ): HTMLElement {
  return (
    <h1 class={'my-0 d-flex items-center'} slot='header'>
      {userMetadata.userLogin} — all gists
        <span
          class={'label gist-badge'}
          title={!allGistsNumber ? 'Your token does not have enougth permissions to get your gists number.\nGo to http://github.com/settings/tokens and check "read:user" flag.' : null}>
          {allGistsNumber ?? '???'}
        </span>
    </h1>
  );
}

/**
 * Generate header by given parameters:
 * @param {IGistItem[]} gistsList - a page with a list of gists
 * @param {number} currentPage - a number of showing page
 * @param {boolean} lastPageReached - an indicator that last page was reached
 * @returns an HTML element of main window content for Gists List displaying case
 */
function getListContent(
    gistsList: IGistItem[],
    currentPage: number,
    lastPageReached: boolean
  ): HTMLElement {
  return <gists-list
    gistsList={gistsList}
    currentPage={currentPage}
    lastPage={lastPageReached}
    slot='main-content'
  />;
}

/**
 * Generate header by given parameters:
 * @param {string} backButtonUserLogin - a user login, the list of files of which should be returned
 * by pressing the back button
 * @param singleGist
 * @returns {HTMLElement} an HTML element of main window header for Single Gist displaying case
 */
function getGistHeader(
  backButtonUserLogin?: string,
  singleGist?: IGistItem,
): HTMLElement {
  return (
    <div
      class={'d-flex items-center flex-start'}
      slot='header'
    >
      <back-to-gists-list
        class={'btn main-window__icon main-window__icon-back'}
        userLogin={backButtonUserLogin}
      />
      <metadata-header
        gistMetadata={singleGist.gistMetadata}
        userData={singleGist.ownerData}
        class={'gist-viewer__metadata ml-2'}
      />
    </div>
  );
}

/**
 * Generate header by given parameters:
 * @param {IGistItem} singleGist
 * @returns an HTML element of main window content for Single Gist displaying case
 */
function getGistContent(singleGist?: IGistItem,): HTMLElement {
  return <gist-viewer
    singleGist={singleGist}
    slot='main-content'
  />
}
