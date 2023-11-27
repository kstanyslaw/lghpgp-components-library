import { Component, h, Host, Listen, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  shadow: true,
})
export class MyComponent {

  @State()
  isMainWindowOpen: boolean = false;

  @Listen('closeWindowClick')
  closeWindowClickHandler() {
    this.isMainWindowOpen = false;
  }


  render() {

    return <Host>
      {
        this.isMainWindowOpen
          ? <main-window />
          : <button
              type="button"
              class={'btn items-center'}
              onClick={() => {this.isMainWindowOpen = true}}
            >
              Open Main Window
            </button>
      }
    </Host>
  }
}
