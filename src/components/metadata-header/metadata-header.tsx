import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { gitCommentSVG, gitFileSVG, gitForkSVG, gitStarSVG } from '../../common/components/svg';
import { IGistMetadata } from '../../components';

@Component({
  tag: 'metadata-header',
  styleUrl: 'metadata-header.scss',
  // shadow: true,
})
export class MetadataHeader {

  @Prop()
  gistMetadata: IGistMetadata;

  @Event()
  goToGist: EventEmitter<string>;

  goToGistHandler() {
    this.goToGist.emit(this.gistMetadata.gistId);
  }

  @Event()
  goToUserGists: EventEmitter<string>;

  goToUserGistsHandler() {
    this.goToUserGists.emit(this.gistMetadata.userLogin);
  }

  render() {

    let {
      firstFileName,
      userLogin,
      lastActive,
      isSecret,
      filesNumber,
      forksNumber,
      commentsNumber,
      starsNumber,
      userAvatarUrl
    } = this.gistMetadata;

    userAvatarUrl = userAvatarUrl ?? 'https://www.clipartmax.com/png/small/343-3438895_kara-strong-black-and-white-profile.png';

    return (
      <Host class={'d-flex space-between'}>
        <div class={'d-flex flex-order-1 left'}>
          <div
            class={'avatar'}
            style={{'background-image': `url(${userAvatarUrl})`}}
            onClick={this.goToUserGistsHandler.bind(this)}
          ></div>
          <div class={'d-inline-block px-lg-2 metadata-right'}>
            <span>
              <a
                onClick={this.goToUserGistsHandler.bind(this)}
                class={'link-text'}
              >
                {userLogin}
              </a>

              {' / '}

              <a
                onClick={this.goToGistHandler.bind(this)}
                class={'link-text'}
              >
                <strong>{firstFileName}</strong>
              </a>

              {isSecret && <span title='Only those with the link can see this gist.' class={'label'}>Secret</span>}
            </span>

            <div class={'fg-color-muted fg-small'}>Last active <relative-time timestamp={lastActive} /> </div>
          </div>
        </div>

        {(filesNumber !== undefined ||
        forksNumber !== undefined ||
        commentsNumber !== undefined ||
        starsNumber !== undefined) &&
        <ul class={'d-flex flex-order-2 right fg-color-muted fg-small m-0'}>

          {filesNumber !== undefined &&
          <li class={'files d-flex px-lg-2'}>
            {gitFileSVG()}
            {filesNumber}
            {filesNumber === 1 ? ' file' : ' files'}
          </li>}

          {forksNumber !== undefined &&
          <li class={'forks d-flex px-lg-2'}>
            {gitForkSVG()}
            {forksNumber}
            {forksNumber === 1 ? ' fork' : ' forks'}
          </li>}

          {commentsNumber !== undefined &&
          <li class={'comments d-flex px-lg-2'}>
            {gitCommentSVG()}
            {commentsNumber}
            {commentsNumber === 1 ? ' comment' : ' comments'}
          </li>}

          {starsNumber !== undefined &&
          <li class={'stars d-flex px-lg-2'}>
            {gitStarSVG()}
            {starsNumber}
            {starsNumber === 1 ? ' star' : ' stars'}
          </li>}

        </ul>}
      </Host>
    );
  }

}
