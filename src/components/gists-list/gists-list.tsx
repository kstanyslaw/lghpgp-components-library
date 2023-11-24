import { Component, Host, Prop, h } from '@stencil/core';
import { IGistListItem } from '../../common/interfaces/gist-list-item.interface';

@Component({
  tag: 'gists-list',
  styleUrl: 'gists-list.scss',
  shadow: true,
})
export class GistsList {
  @Prop()
  gistsList: IGistListItem[];

  @Prop()
  currentPage: number;

  @Prop()
  lastPage: boolean;

  render() {
    return (
      <Host>
        <ul class={'list-no-decoration'}>
          {this.gistsList.map((gistItem: IGistListItem) => <li class={'gist-list-item mb-4'}>
            <gist-list-item gistListItem={gistItem} />
          </li>)}
        </ul>

        <div class={'items-center'}>
          <list-paginator lastPage={false} currentPage={this.currentPage}/>
        </div>
      </Host>
    );
  }

}
