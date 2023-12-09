import { h } from '@stencil/core';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { IGistItem, IUserData } from '../../components';

export function mainWindowFactory (
    whatToDisplay: DisplayVariants,
    isLoading: boolean,
    userMetadata?: IUserData,
    allGistsNumber?: number | null,
    backButtonUserLogin?: string,
    gistsList?: IGistItem[],
    currentPage?: number,
    lastPageReached?: boolean,
    singleGist?: IGistItem,
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

function getListHeader(
    userMetadata: IUserData,
    allGistsNumber: number | null
  ): HTMLElement {
  return (
    <h1 class={'my-0'} slot='header'>
      {userMetadata.userLogin} — all gists
        <span
          class={'label gist-badge'}
          title={!allGistsNumber ? 'Your token does not have enougth permissions to get your gists number.\nGo to http://github.com/settings/tokens and check "read:user" flag.' : null}>
          {allGistsNumber ?? '???'}
        </span>
    </h1>
  );
}

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

function getGistContent(singleGist?: IGistItem,): HTMLElement {
  return <gist-viewer
    singleGist={singleGist}
    slot='main-content'
  />
}
