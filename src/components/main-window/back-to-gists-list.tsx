import { Component, Event, EventEmitter, Listen, h } from "@stencil/core";
import { arrowLeftShortSVG } from "../../common/components/svg";

@Component({
  tag: 'back-to-gists-list'
})
export class BackToGistsList {
  @Event()
  backToGistsListClick: EventEmitter;

  @Listen('click')
  clickHandler() {
    this.backToGistsListClick.emit();
  }

  render() {
    return <i class={'icon-back-to-gists-list'}>{arrowLeftShortSVG()}</i>
  }
}
