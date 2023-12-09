import { Component, Event, EventEmitter, Listen, Prop, h } from "@stencil/core";
import { arrowLeftShortSVG } from "../../common/components/svg";

@Component({
  tag: 'back-to-gists-list'
})
export class BackToGistsList {
  @Prop()
  userLogin: string;

  @Event()
  backToGistsListClick: EventEmitter;

  @Listen('click')
  clickHandler() {
    this.backToGistsListClick.emit();
  }

  render() {
    return <i
      class={'icon-back-to-gists-list'}
      title={`Back to ${this.userLogin} gists`}
    >
      {arrowLeftShortSVG()}
    </i>
  }
}
