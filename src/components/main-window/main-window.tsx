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

  @Listen('goToGist')
  TEST_goToGist(event: CustomEvent<string>) {
    console.log(event.detail);
  }

  @Listen('goToUserGists')
  TEST_goToUserGists(event: CustomEvent<string>) {
    console.log(event.detail);
  }

  @Listen('goToPage')
  TEST_goToPage(event: CustomEvent<number>) {
    this.currentPage = event.detail;
    console.log(this.currentPage);
  }

  @Listen('selectFileInsert')
  TEST_gistSelectedLog(event: CustomEvent<IGistFileInsert>) {
      console.log('gist choosed: ', event.detail)
    }

  get lastPage(): boolean {
    return this.currentPage >= 13;
  }

  render() {

    return <Host>
      {/* <div class={'items-center'}>
        <button type='button' onClick={() => {this.whatToDisplay = DisplayVariants.List}}>List of All Gists</button>
        <button type='button'onClick={() => {this.whatToDisplay = DisplayVariants.Gist}}>Gist with Files</button>
        <hr class={'horisontal-line mb-1'}/>
      </div> */}


      <div class={'d-flex items-center space-between'}>
        <back-to-gists-list class={'btn main-window__icon main-window__icon-back'} style={{'visibility': (this.whatToDisplay === DisplayVariants.Gist) ? 'visible' : 'hidden'}}/>
        <h1>Your {(this.whatToDisplay === DisplayVariants.List) ? 'Gists List' : 'Single Gist' }</h1>
        <close-window class={'main-window__icon main-window__icon-close'}/>
      </div>
      <hr class={'horisontal-line mb-2'}/>

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
