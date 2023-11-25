import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  shadow: true,
})
export class MyComponent {

  render() {

    return <Host>
      <main-window />
    </Host>
  }
}
