import { Component, Prop, h } from '@stencil/core';
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

  DUMMY_CODE: string[] = (`var promisify =
  (fn) =>
    (...args) =>
      new Promise((resolve, reject) => {
        fn(
          ...args,
          result => resolve(result),
          error => reject(error)
        );
      });`).split('\n');

  render() {
    // return <div>Hello, World! I'm {this.getText()}</div>;
    // return <code-preview code={this.DUMMY_CODE} codeLang='javascript'/>;
    return <metadata-header
      files={0}
      forks={0}
      comments={0}
      stars={0}
      fileName='promisify.js'
      userName='kstanyslaw'
      avatarUrl='https://avatars.githubusercontent.com/u/15340653?v=4'
      gistUrl='#'
      userNameUrl='#'
      isSecret={true}
      lastActive={new Date("2023-10-24T11:53:42Z")}
    />
  }
}
