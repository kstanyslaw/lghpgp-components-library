import { Component, Event, EventEmitter, Listen, h } from "@stencil/core";
import { closeCrossSVG } from "../../common/components/svg";

/**
 * A component that provides close button
 * @event closeWindowClick
 * @listens onClick on itself
 */
@Component({
  tag: 'close-window'
})
export class CloseWindow {
  @Event()
  closeWindowClick: EventEmitter;

  @Listen('click')
  clickHandler() {
    this.closeWindowClick.emit();
  }

  render() {
    return <i class={'icon-close'}>{closeCrossSVG()}</i>
  }
}
