import { Component, Listen, State, h } from '@stencil/core';
import { DUMMY_CODE, DUMMY_GISTS_LIST, DUMMY_GIST_FILES, DUMMY_GIST_METADATA } from '../../utils/utils';
import { IGistFileInsert } from '../../common/interfaces/gist-file.interface';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  shadow: true,
})
export class MyComponent {

  // @State()
  // currentPage: number = 1;

  // @State()
  // isListLoading = true;

  // @Listen('goToPage')
  // TEST_goToPage(event: CustomEvent<number>) {
  //   this.currentPage = event.detail;
  //   console.log(this.currentPage);
  // }

  // @Listen('gistSelected')
  // TEST_gistSelectedLog(event: CustomEvent<string>) {
  //   console.log('gist choosed id: ', event.detail)
  // }

  @Listen('selectFileInsert')
  TEST_gistSelectedLog(event: CustomEvent<IGistFileInsert>) {
      console.log('gist choosed: ', event.detail)
    }

  // get lastPage(): boolean {
  //   return this.currentPage >= 13;
  // }

  // componentWillLoad() {
  //   setTimeout(() => this.isListLoading = false, 2000);
  // }

  render() {
    // return <gists-list
    //   gistsList={DUMMY_GISTS_LIST}
    //   currentPage={this.currentPage}
    //   lastPage={this.lastPage}
    // />

    // return <single-file-view
    //   code={DUMMY_CODE}
    //   codeLang='javascript'
    //   filename='promisify.js'
    // />

    return <gist-viewer
      gistMetadata={DUMMY_GIST_METADATA}
      gistFiles={DUMMY_GIST_FILES}
    />
  }
}
