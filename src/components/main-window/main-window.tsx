import { Component, Listen, State, h, Host } from '@stencil/core';
import { DUMMY_GISTS_LIST, DUMMY_GIST_FILES, DUMMY_GIST_METADATA } from '../../utils/utils';
import { IGistFileInsert } from '../../common/interfaces/gist-file.interface';

enum DisplayVariants {
  List,
  Gist,
}

@Component({
  tag: 'main-window',
  styleUrl: 'main-window.scss',
})
export class MainWindow {

  @State()
  whatToDisplay: DisplayVariants = DisplayVariants.List;

  @State()
  currentPage: number = 1;

  @State()
  allGists: number | null = 48;

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

  @Listen('selectFileInsert')
  TEST_gistSelectedLog(event: CustomEvent<IGistFileInsert>) {
    console.log('gist choosed: ', event.detail);
    // To-Do onClosePlugin ???
  }

  get lastPage(): boolean {
    return this.currentPage >= 13;
  }

  render() {

    const backButtonTitle = `Back to ${DUMMY_GIST_METADATA.userName} gists`;

    return <Host>
      <div class={'d-flex items-center space-between'}>
        <div class={'d-flex items-center flex-start'}>
          <back-to-gists-list class={'btn main-window__icon main-window__icon-back'} hidden={(this.whatToDisplay === DisplayVariants.List)} title={backButtonTitle}/>

          {(this.whatToDisplay === DisplayVariants.List) && <h1 class={'my-0'}> {DUMMY_GIST_METADATA.userName} — all gists <span class={'label gist-badge'} title={!this.allGists ? 'Your token does not have enougth permissions to get your gists number.\nGo to http://github.com/settings/tokens and check "read:user" flag.' : null}> {this.allGists ?? '???'} </span> </h1> }

          {(this.whatToDisplay === DisplayVariants.Gist) && <metadata-header
          fileName={DUMMY_GIST_METADATA.fileName}
          isSecret={DUMMY_GIST_METADATA.isSecret}
          userName={DUMMY_GIST_METADATA.userName}
          gistId={DUMMY_GIST_METADATA.gistId}
          lastActive={DUMMY_GIST_METADATA.lastActive}
          userNameUrl={''}
          userAvatarUrl={DUMMY_GIST_METADATA.userAvatarUrl}
          class={'gist-viewer__metadata ml-2'}
        />}
        </div>


        <close-window class={'main-window__icon main-window__icon-close'}/>
      </div>
      <hr class={'horisontal-line mb-4'}/>

      {(this.whatToDisplay === DisplayVariants.List) && <gists-list
        gistsList={DUMMY_GISTS_LIST}
        currentPage={this.currentPage}
        lastPage={this.lastPage}
      />}

      {(this.whatToDisplay === DisplayVariants.Gist) && <gist-viewer
        gistMetadata={DUMMY_GIST_METADATA}
        gistFiles={DUMMY_GIST_FILES}
      />}
    </Host>
  }

}
