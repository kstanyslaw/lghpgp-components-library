import { Component, Host, Prop, h } from '@stencil/core';
import { timeString } from '../../utils/utils';

@Component({
  tag: 'relative-time',
})
export class RelativeTime {
  @Prop()
  timestamp!: Date;

  get timeString(): string {
    return timeString(this.timestamp);
  }

  render() {
    return (
      <Host>{this.timeString} </Host>
    );
  }

}
