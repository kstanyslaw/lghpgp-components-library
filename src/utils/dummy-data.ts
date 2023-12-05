import { IGistListItem } from "../common/interfaces/gist-list-item.interface";
import { IGistMetadata } from "../common/interfaces/gist-data.interface";
import { IGistFile } from "../common/interfaces/gist-file.interface";
import { IUserData } from "../common/interfaces/user-metadata.interface";

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

export const DUMMY_USER: IUserData = {
  userLogin: "kstanylsaw",
  userAvatarUrl: "https://avatars.githubusercontent.com/u/15340653?s=60&v=4",
}

export const DUMMY_GIST_ITEM: IGistListItem = {
  gistMetadata: {
    gistId: "DummyID",
    firstFileName: 'promisify.js',
    lastActive: new Date("2023-10-24T11:53:42Z"),
    isUpdated: false,
    isSecret: true,
    filesNumber: 0,
    forksNumber: 1,
    commentsNumber: 0,
    starsNumber: 2,
  },
  ownerData: DUMMY_USER,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  files: [{
    fileName: 'promisify.js',
    code: DUMMY_CODE,
    codeLang: 'javascript',
  }]
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
    files: [{
      fileName: 'child.component.ts',
      code: ANOTHER_DUMMY_CODE,
      codeLang: 'javascript'
    }]
  },
];

export const DUMMY_GIST_METADATA: IGistMetadata = {
  gistId: 'DummyId',
  firstFileName: 'promisify.js',
  lastActive: new Date("2023-10-24T11:53:42Z"),
  isUpdated: true,
  isSecret: true,
  filesNumber: 0,
  forksNumber: 1,
  commentsNumber: 0,
  starsNumber: 2,
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
