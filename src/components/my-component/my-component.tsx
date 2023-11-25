import { Component, Listen, State, h, Host } from '@stencil/core';
import { DUMMY_GISTS_LIST, DUMMY_GIST_FILES, DUMMY_GIST_METADATA } from '../../utils/utils';
import { IGistFileInsert } from '../../common/interfaces/gist-file.interface';

enum DisplayVariants {
  List,
  Gist,
}

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  shadow: true,
})
export class MyComponent {

  @State()
  whatToDisplay: DisplayVariants = DisplayVariants.Gist;


  @State()
  currentPage: number = 1;

  @State()
  isListLoading = true;

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

  // componentWillLoad() {
  //   setTimeout(() => this.isListLoading = false, 2000);
  // }

  render() {

    return <Host>
      <div class={'items-center'}>
        <button type='button' onClick={() => {this.whatToDisplay = DisplayVariants.List}}>List of All Gists</button>
        <button type='button'onClick={() => {this.whatToDisplay = DisplayVariants.Gist}}>Gist with Files</button>
      </div>

      <hr class={'horisontal-line mb-1'}/>
      <h1 class={'items-center mb-4'}> Your {(this.whatToDisplay === DisplayVariants.List) ? 'Gists List' : 'Single Gist' }</h1>

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
