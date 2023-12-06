import { Component, h, Host, Prop } from '@stencil/core';
import { DisplayVariants } from '../../common/enums/display-variants.enum';
import { IGistListItem } from '../../common/interfaces/gist-list-item.interface';

@Component({
  tag: 'main-window',
  styleUrl: 'main-window.scss',
})
export class MainWindow {

  @Prop()
  whatToDisplay: DisplayVariants = DisplayVariants.List;

  @Prop()
  userMetadata: any;

  // If selected LIST
  @Prop()
  gistsList?: IGistListItem[];

  @Prop()
  currentPage: number = 1;

  @Prop()
  lastPageReached: boolean = false;

  @Prop()
  allGistsNumber: number | null = null;

  // If selected GIST
  @Prop()
  singleGist?: IGistListItem;

  render() {

    const backButtonTitle = `Back to ${this.userMetadata.userLogin} gists`;

    return <Host>
      <div class={'d-flex items-center space-between main-window-header'}>

        {/* NEED TO CHANGE TO SLOT  */}
        <div class={'d-flex items-center flex-start'}>
          {(this.whatToDisplay === DisplayVariants.List) && <h1 class={'my-0'}> {this.userMetadata.userLogin} — all gists <span class={'label gist-badge'} title={!this.allGistsNumber ? 'Your token does not have enougth permissions to get your gists number.\nGo to http://github.com/settings/tokens and check "read:user" flag.' : null}> {this.allGistsNumber ?? '???'} </span> </h1> }

          {(this.whatToDisplay === DisplayVariants.Gist) && (
          <div class={'d-flex items-center flex-start'}><back-to-gists-list class={'btn main-window__icon main-window__icon-back'} title={backButtonTitle} /><metadata-header
              gistMetadata={this.singleGist.gistMetadata}
              userData={this.singleGist.ownerData}
              class={'gist-viewer__metadata ml-2'} /></div>)}
        </div>


        <close-window class={'main-window__icon main-window__icon-close'}/>
      </div>
      <hr class={'horisontal-line mb-4'}/>

      {/* NEED TO CHANGE TO SLOT  */}
      {(this.whatToDisplay === DisplayVariants.List) && <gists-list
        gistsList={this.gistsList}
        currentPage={this.currentPage}
        lastPage={this.lastPageReached}
      />}

      {(this.whatToDisplay === DisplayVariants.Gist) && <gist-viewer
        singleGist={this.singleGist}
      />}
    </Host>
  }

}
