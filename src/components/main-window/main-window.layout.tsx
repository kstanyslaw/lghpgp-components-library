import { Component, Host, h } from "@stencil/core";

@Component({
  tag: 'main-window-layout',
  styleUrl: 'main-window.scss'
})
export class MainWindowLayout {
  render() {
    return <Host>
      <div class={'d-flex items-center space-between'}>
        <slot name="header" />
        <close-window class={'main-window__icon main-window__icon-close'}/>
      </div>
      <hr class={'horisontal-line mb-4'}/>
      <slot name="main-content" />
    </Host>
  }
}
