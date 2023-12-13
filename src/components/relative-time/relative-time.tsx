import { Component, Host, Prop, h } from '@stencil/core';
import { timeString } from '../../utils/utils';

/**
 * A component shows relative time by given timestamp in Date format
 * @prop {Date} timestamp
 */
@Component({
  tag: 'relative-time',
})
export class RelativeTime {
  /**
   * @type {Date}
   */
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
