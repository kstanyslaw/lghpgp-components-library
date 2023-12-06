import { Component, h, Host, Listen, State } from '@stencil/core';
// import { fetchGistsList } from '../../utils/utils';
import { IGistFileInsert } from '../../common/interfaces';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { DUMMY_GIST_FILES, DUMMY_GIST_ITEM, DUMMY_GIST_METADATA, DUMMY_GISTS_LIST, DUMMY_USER } from '../../utils/dummy-data';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  shadow: true,
})
export class MyComponent {

  @State()
  whatToDisplay: DisplayVariants = DisplayVariants.List;

  @State()
  isMainWindowOpen: boolean = true;

  @State()
  isLoading: boolean = false;

  @State()
  currentPage: number = 1;

  @Listen('closeWindowClick')
  closeWindowClickHandler() {
    this.isMainWindowOpen = false;
  }

  @Listen('selectFileInsert')
  TEST_gistSelectedLog(event: CustomEvent<IGistFileInsert>) {
    this.isMainWindowOpen = false;
    console.log('gist choosed: ', event.detail);
    // To-Do onClosePlugin ???
  }

  @Listen('backToGistsListClick')
  TEST_backToGistsListClick() {
    this.whatToDisplay = DisplayVariants.List;
  }

  @Listen('goToGist')
  TEST_goToGist(event: CustomEvent<string>) {
    console.log(event.detail);
    this.whatToDisplay = DisplayVariants.Gist;
  }

  @Listen('goToUserGists')
  TEST_goToUserGists(event: CustomEvent<string>) {
    console.log(event.detail);
    this.whatToDisplay = DisplayVariants.List;
  }

  @Listen('goToPage')
  TEST_goToPage(event: CustomEvent<number>) {
    this.currentPage = event.detail;
    console.log(this.currentPage);
  }

  async openWindowClickHandler() {
    this.isLoading = true;
    this.isMainWindowOpen = true;
    // await fetchGistsList();
    this.isLoading = false;
  }

  get lastPageReached(): boolean {
    return this.currentPage >= 13;
  }

  get userMetadata() {
    return {
      userLogin: 'kstanyslaw'
    }
  }


  render() {

    const singleGist = {
      description: DUMMY_GIST_ITEM.description,
      gistMetadata: DUMMY_GIST_METADATA,
      files: DUMMY_GIST_FILES,
      ownerData: DUMMY_USER,
    };

    return <Host>
      {
        this.isMainWindowOpen
          ? <main-window
            whatToDisplay={this.whatToDisplay}
            userMetadata={DUMMY_USER}

            gistsList={DUMMY_GISTS_LIST}
            currentPage={this.currentPage}
            lastPageReached={this.lastPageReached}
            allGistsNumber={48}

            singleGist={singleGist}
          />
          : <button
              type="button"
              class={'btn items-center'}
              onClick={this.openWindowClickHandler.bind(this)}
            >
              Open Main Window
            </button>
      }
    </Host>
  }
}
