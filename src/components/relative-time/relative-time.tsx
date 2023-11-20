import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'relative-time',
})
export class RelativeTime {
  @Prop()
  timestamp!: Date;

  render() {
    return (
      <Host>{this.timestamp.toISOString()} </Host>
    );
  }

}
