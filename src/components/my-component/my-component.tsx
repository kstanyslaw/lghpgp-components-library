import { Component, Listen, State, h } from '@stencil/core';
import { DUMMY_GISTS_LIST } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  shadow: true,
})
export class MyComponent {

  @State()
  currentPage: number = 1;

  @Listen('goToPage')
  TEST_goToPage(event: CustomEvent<number>) {
    this.currentPage = event.detail;
    console.log(this.currentPage);
  }

  @Listen('gistSelected')
  TEST_gistSelectedLog(event: CustomEvent<string>) {
    console.log('gist choosed id: ', event.detail)
  }

  render() {
    return <gists-list
      gistsList={DUMMY_GISTS_LIST}
      currentPage={this.currentPage}
    />
  }
}
