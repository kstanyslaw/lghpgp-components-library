import { Component, Host, Prop, h } from '@stencil/core';
import { IGistItem } from '../../common/interfaces';


/**
 * A component shows list of given gists and paginator
 * @prop {IGistItem[]} gistsList - an array of gists
 * @prop {number} currentPage
 * @prop {boolean} lastPage - a condition that indicates if last page was reached.
 * It needs because there is some problems getting exact number of gists of the user.
 */
@Component({
  tag: 'gists-list',
  styleUrl: 'gists-list.scss',
  shadow: true,
})
export class GistsList {
  /**
   * @type {IGistItem[]} - an array of gists
   */
  @Prop()
  gistsList: IGistItem[];

  @Prop()
  currentPage: number;

  /**
   * @type {boolean} - a condition that indicates if last page was reached.
   */
  @Prop()
  lastPage: boolean;

  render() {
    return (
      <Host>
        <ul class={'list-no-decoration'}>
          {this.gistsList.map((gistItem: IGistItem) => <li class={'gist-list-item mb-5'}>
            <gist-list-item gistListItem={gistItem} />
          </li>)}
        </ul>

        <div class={'text-center'}>
          <list-paginator lastPage={false} currentPage={this.currentPage}/>
        </div>
      </Host>
    );
  }

}
