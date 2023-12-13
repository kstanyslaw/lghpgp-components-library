import { Component, Event, EventEmitter, Listen, Prop, h } from "@stencil/core";
import { arrowLeftShortSVG } from "../../common/components/svg";

/**
 * A component that provides back to user gists list button
 * @prop {string} userLogin - a user login, the list of files of which should be returned
 * @event backToGistsListClick - emits that back button clicked
 * @listens onClick on itself
 */
@Component({
  tag: 'back-to-gists-list'
})
export class BackToGistsList {
  /**
   * @type {string} - a user login, the list of files of which should be returned
   */
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
