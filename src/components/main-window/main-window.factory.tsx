import { h } from '@stencil/core';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { IGistItem, IUserData } from '../../components';

export const mainWindowHeaderFactory = (
  whatToDisplay: DisplayVariants,
  isLoading: boolean,
  userMetadata?: IUserData,
  allGistsNumber?: number | null,
  backButtonUserLogin?: string,
  singleGist?: IGistItem,
  ): HTMLElement => {
    switch (true) {
      case (!isLoading && whatToDisplay === DisplayVariants.List):
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

      case (!isLoading && whatToDisplay === DisplayVariants.Gist):
        const backButtonTitle = `Back to ${backButtonUserLogin} gists`;
        return (
          <div
            class={'d-flex items-center flex-start'}
            slot='header'
          >
            <back-to-gists-list
              class={'btn main-window__icon main-window__icon-back'}
              title={backButtonTitle}
            />
            <metadata-header
              gistMetadata={singleGist.gistMetadata}
              userData={singleGist.ownerData}
              class={'gist-viewer__metadata ml-2'}
            />
          </div>
        );

      default:
        break;
    }
}

export const mainWindowContentFactory = (
  whatToDisplay: DisplayVariants,
  isLoading: boolean,
  gistsList?: IGistItem[],
  currentPage?: number,
  lastPageReached?: boolean,
  singleGist?: IGistItem
): HTMLElement => {
  switch (true) {
    case (!isLoading && whatToDisplay === DisplayVariants.List):
      return <gists-list
      gistsList={gistsList}
      currentPage={currentPage}
      lastPage={lastPageReached}
      slot='main-content'
    />;

    case (!isLoading && whatToDisplay === DisplayVariants.Gist):
      return <gist-viewer
      singleGist={singleGist}
      slot='main-content'
    />
    default:
      break;
  }
}
