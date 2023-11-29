import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'gist-description',
  styles: `
    .gist-description {
      word-wrap: break-word;
      line-height: 1.5;
    }
  `
})
export class GistDescription {
  @Prop()
  description: string;

  render() {
    return (<p class={'gist-description my-0'}> {this.description} </p>);
  }

}
