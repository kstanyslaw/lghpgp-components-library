import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { IGistMetadata } from '../../common/interfaces';
import { IUserData } from '../../common/interfaces';
import { gitCommentSVG, gitFileSVG, gitForkSVG, gitStarSVG } from '../../common/components/svg';

/**
 * A component shows given metadata of gist
 * @prop {IGistMetadata} gistMetadata
 * @prop {IUserData} userData - a data of gist's owner
 * @event goToGist emits gist ID
 * @event goToUserGists emits user login
 */
@Component({
  tag: 'metadata-header',
  styleUrl: 'metadata-header.scss',
})
export class MetadataHeader {

  /**
   * @type {IGistMetadata}
   */
  @Prop()
  gistMetadata: IGistMetadata;

  /**
   * @type {IUserData} a data of gist's owner
   */
  @Prop()
  userData: IUserData;

  @Event()
  goToGist: EventEmitter<string>;

  goToGistHandler(): void {
    this.goToGist.emit(this.gistMetadata.gistId);
  }

  @Event()
  goToUserGists: EventEmitter<string>;

  goToUserGistsHandler(): void {
    this.goToUserGists.emit(this.userData.userLogin);
  }

  render() {

    let {
      firstFileName,
      lastActive,
      isSecret,
      filesNumber,
      forksNumber,
      commentsNumber,
      starsNumber,
    } = this.gistMetadata;

    let {
      userAvatarUrl,
      userLogin
    } = this.userData;

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
