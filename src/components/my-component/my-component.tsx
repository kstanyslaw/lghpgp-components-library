import { Component, h, Host, Listen, State } from '@stencil/core';
import { fetchGistsList } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  shadow: true,
})
export class MyComponent {

  @State()
  isMainWindowOpen: boolean = false;

  @State()
  isLoading: boolean = false;

  @Listen('closeWindowClick')
  closeWindowClickHandler() {
    this.isMainWindowOpen = false;
  }

  @Listen('selectFileInsert')
  TEST_gistSelectedLog() {
    this.isMainWindowOpen = false;
  }

  async openWindowClickHandler() {
    this.isLoading = true;
    this.isMainWindowOpen = true;
    await fetchGistsList();
    this.isLoading = false;
  }


  render() {

    return <Host>
      {
        this.isMainWindowOpen
          ? <main-window />
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
