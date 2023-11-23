import { Component, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css'],
  shadow: true,
})
export class MyComponent {
  render() {
    return <single-file-view filename='promisify.js' />
  }
}
