import { Component, Prop, h } from '@stencil/core';
import { DUMMY_GIST_ITEM } from '../../utils/utils';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrls: ['my-component.css', 'style.css'],
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    // return <div>Hello, World! I'm {this.getText()}</div>;
    // return <gist-list-item gistListItem={DUMMY_GIST_ITEM} onGistSelected={ev => console.log(ev)}/>
    return <list-paginator/>
  }
}
