import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { gitCommentSVG, gitFileSVG, gitForkSVG, gitStarSVG } from '../../common/components/svg';

@Component({
  tag: 'metadata-header',
  styleUrl: 'metadata-header.scss',
  // shadow: true,
})
export class MetadataHeader {
  @Prop()
  fileName!: string;
  @Prop()
  gistId!: string;

  @Prop()
  userName!: string;
  @Prop()
  userNameUrl!: string;

  @Prop()
  lastActive: Date;

  @Prop()
  isSecret!: boolean;

  @Prop()
  filesNumber?: number;

  @Prop()
  forksNumber?: number;

  @Prop()
  commentsNumber?: number;

  @Prop()
  starsNumber?: number;

  @Prop()
  userAvatarUrl?: string = 'https://www.clipartmax.com/png/small/343-3438895_kara-strong-black-and-white-profile.png';

  @Event()
  goToGist: EventEmitter<string>;

  goToGistHandler() {
    this.goToGist.emit(this.gistId);
  }

  @Event()
  goToUserGists: EventEmitter<string>;

  goToUserGistsHandler() {
    this.goToUserGists.emit(this.userNameUrl);
  }

  render() {

    return (
      <Host class={'d-flex space-between'}>
        <div class={'d-flex flex-order-1 left'}>
          <div
            class={'avatar'}
            style={{'background-image': `url(${this.userAvatarUrl})`}}
            onClick={this.goToUserGistsHandler.bind(this)}
          ></div>
          <div class={'d-inline-block px-lg-2 metadata-right'}>
            <span>
              <a
                onClick={this.goToUserGistsHandler.bind(this)}
                class={'link-text'}
              >
                {this.userName}
              </a>

              {' / '}

              <a
                onClick={this.goToGistHandler.bind(this)}
                class={'link-text'}
              >
                <strong>{this.fileName}</strong>
              </a>

              {this.isSecret && <span title='Only those with the link can see this gist.' class={'label'}>Secret</span>}
            </span>

            <div class={'fg-color-muted fg-small'}>Last active <relative-time timestamp={this.lastActive} /> </div>
          </div>
        </div>

        {(this.filesNumber !== undefined ||
        this.forksNumber !== undefined ||
        this.commentsNumber !== undefined ||
        this.starsNumber !== undefined) &&
        <ul class={'d-flex flex-order-2 right fg-color-muted fg-small m-0'}>

          {this.filesNumber !== undefined &&
          <li class={'d-flex px-lg-2'}>
            {gitFileSVG()}
            {this.filesNumber}
            {this.filesNumber === 1 ? ' file' : ' files'}
          </li>}

          {this.forksNumber !== undefined &&
          <li class={'d-flex px-lg-2'}>
            {gitForkSVG()}
            {this.forksNumber}
            {this.forksNumber === 1 ? ' fork' : ' forks'}
          </li>}

          {this.commentsNumber !== undefined &&
          <li class={'d-flex px-lg-2'}>
            {gitCommentSVG()}
            {this.commentsNumber}
            {this.commentsNumber === 1 ? ' comment' : ' comments'}
          </li>}

          {this.starsNumber !== undefined &&
          <li class={'d-flex px-lg-2'}>
            {gitStarSVG()}
            {this.starsNumber}
            {this.starsNumber === 1 ? ' star' : ' stars'}
          </li>}

        </ul>}
      </Host>
    );
  }

}
