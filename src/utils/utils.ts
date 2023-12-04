import { IGistListItem } from "../common/interfaces/gist-list-item.interface";
import { IGistMetadata } from "../common/interfaces/gist-data.interface";
import { IGistFile } from "../common/interfaces/gist-file.interface";
import { TOKEN } from "./git-token";

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function timeString(timestamp:Date): string {
  const milliseconds = timestamp.getTime();
  const diffTime = (new Date()).getTime() - milliseconds;

  switch (true) {
    // YEARS
    case diffTime > (2 * 365 * 24 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(365 * 24 * 60 * 60 * 1000))} years ago`;

    case diffTime > (30 * 11 * 24 * 60 * 60 * 1000):
      return 'last year';

    // MONTHS
    case diffTime > (61 * 24 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(30 * 24 * 60 * 60 * 1000))} months ago`;

    case diffTime > (7 * 3 * 24 * 60 * 60 * 1000):
      return 'last month';

    // WEEKS
    case diffTime > (7 * 2 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(7 * 24 * 60 * 60 * 1000))} weeks ago`;

    case diffTime > (7 * 24 * 60 * 60 * 1000):
      return 'last week';

    // DAYS
    case diffTime > (2 * 24 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(24 * 60 * 60 * 1000))} days ago`;

    case diffTime > (24 * 60 * 60 * 1000):
      return 'yesterday';

    // HOURS
    case diffTime > (2 * 60 * 60 * 1000):
      return `${Math.floor(diffTime/(60 * 60 * 1000))} hours ago`;

    case diffTime > (60 * 60 * 1000):
      return 'last hour';

    // HOURS
    case diffTime > (2 * 60 * 1000):
      return `${Math.floor(diffTime/(60 * 1000))} minutes ago`;

    case diffTime > (60 * 1000):
      return 'last minute';

    default:
      return 'a few seconds ago';
  }
}

export async function fetchGistsList() {
  return await getGists(TOKEN, 'gorborukov');
}

const getGists = async (token: string, username: string): Promise<string> => {
  const githubGistURL = `https://api.github.com/users/${username}/gists`;
  const response = await fetch(githubGistURL, {
    method: 'GET',
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });
  console.log(await response.json());

  return  'no id :(';
};

export const DUMMY_CODE: string[] = (`var promisify =
(fn) =>
  (...args) =>
    new Promise((resolve, reject) => {
      fn(
        ...args,
        result => resolve(result),
        error => reject(error)
      );
    });`).split('\n');

const ANOTHER_DUMMY_CODE: string[] = (`import { Component } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  ...
  template: \`
  <div [formGroup]="groupNameContainer">
    <input type="text" formControlName="textInput">
  </div>
  \`
})
export class ChildComponent {

  constructor(public controlContainer: ControlContainer) { }

  get groupNameContainer() {
    return this.controlContainer.control as FormGroup<any>;
  }
}`).split('\n');

export const DUMMY_GIST_ITEM: IGistListItem = {
  gistMetadata: {
    gistId: "DummyID",
    firstFileName: 'promisify.js',
    userLogin: "kstanylsaw",
    lastActive: new Date("2023-10-24T11:53:42Z"),
    isUpdated: false,
    isSecret: true,
    filesNumber: 0,
    forksNumber: 1,
    commentsNumber: 0,
    starsNumber: 2,
    userAvatarUrl: "https://avatars.githubusercontent.com/u/15340653?s=60&v=4",
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  codePreviewRaw: DUMMY_CODE,
  codeLang: 'javascript',
}

export const DUMMY_GISTS_LIST: IGistListItem[] = [
  DUMMY_GIST_ITEM,
  {
    ...DUMMY_GIST_ITEM,
    gistMetadata:{
      ...DUMMY_GIST_ITEM.gistMetadata,
      firstFileName: 'child.component.ts',
      filesNumber: 2,
      isSecret: false,
      gistId: 'Another DummyID',
      lastActive: new Date(),
    },
    codePreviewRaw: ANOTHER_DUMMY_CODE
  },
];

export const DUMMY_GIST_METADATA: IGistMetadata = {
  gistId: 'DummyId',
  firstFileName: 'promisify.js',
  userLogin: "kstanylsaw",
  lastActive: new Date("2023-10-24T11:53:42Z"),
  isUpdated: true,
  isSecret: true,
  filesNumber: 0,
  forksNumber: 1,
  commentsNumber: 0,
  starsNumber: 2,
  userAvatarUrl: "https://avatars.githubusercontent.com/u/15340653?s=60&v=4",
}

export const DUMMY_GIST_FILES: IGistFile[] = [
  {
    code: DUMMY_CODE,
    codeLang: 'javascript',
    fileName: 'promisify.js'
  },
  {
    code: ANOTHER_DUMMY_CODE,
    codeLang: 'javascript',
    fileName: 'child-component.ts'
  },
]
