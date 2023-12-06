import { Component, Host, Prop, h } from '@stencil/core';
import { IGistItem } from '../../common/interfaces';

@Component({
  tag: 'gists-list',
  styleUrl: 'gists-list.scss',
  shadow: true,
})
export class GistsList {
  @Prop()
  gistsList: IGistItem[];

  @Prop()
  currentPage: number;

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
