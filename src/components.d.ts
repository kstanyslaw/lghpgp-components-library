/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IGistFileInsert, IGistItem, IGistMetadata, IUserData } from "./common/interfaces";
import { DisplayVariants } from "./common/enums/display-variants.enum";
export { IGistFileInsert, IGistItem, IGistMetadata, IUserData } from "./common/interfaces";
export { DisplayVariants } from "./common/enums/display-variants.enum";
export namespace Components {
    /**
     * A component that provides back to user gists list button
     * @prop {string} userLogin - a user login, the list of files of which should be returned
     * @event backToGistsListClick - emits that back button clicked
     * @listens onClick on itself
     */
    interface BackToGistsList {
        /**
          * @type {string} - a user login, the list of files of which should be returned
         */
        "userLogin": string;
    }
    /**
     * A component that provides close button
     * @event closeWindowClick
     * @listens onClick on itself
     */
    interface CloseWindow {
    }
    /**
     * @param code - A property that takes an array of lines of code
     * @param lang - A programing language of this code
     * @returns An <pre> element with a strings of <code> line by line.
     * Uses {index + 1} to display the line number.
     * Uses Prismjs to highlight code
     */
    interface CodePreview {
        /**
          * @type {string[]} - Code Raw
         */
        "code": string[];
        /**
          * @type {string} - Code language
         */
        "codeLang": string;
    }
    /**
     * A component shows given gist description
     * @prop {string} description
     */
    interface GistDescription {
        "description": string;
    }
    /**
     * A component that shows metadata, description and code preview
     * of a given gist via the appropriate child components
     * @prop {IGistItem} gistListItem
     * @event goToGist emits ID of selected gist
     */
    interface GistListItem {
        "gistListItem": IGistItem;
    }
    /**
     * A component shows single gist with all files in it and descriotion
     * Also this component intercepts gist ID to event when user choose a file
     * form gist
     * @prop {IGistFile} singleGist
     * @method selectFileInsertInterceptor - intercepts gist ID
     */
    interface GistViewer {
        "singleGist": IGistItem;
    }
    /**
     * A component shows list of given gists and paginator
     * @prop {IGistItem[]} gistsList - an array of gists
     * @prop {number} currentPage
     * @prop {boolean} lastPage - a condition that indicates if last page was reached.
     * It needs because there is some problems getting exact number of gists of the user.
     */
    interface GistsList {
        "currentPage": number;
        /**
          * @type {IGistItem[]} - an array of gists
         */
        "gistsList": IGistItem[];
        /**
          * @type {boolean} - a condition that indicates if last page was reached.
         */
        "lastPage": boolean;
    }
    /**
     * @prop {number} currentPage
     * @prop {boolean} lastPage - a condition that indicates if last page has been reached
     * @event goToPage emits next page number
     */
    interface ListPaginator {
        /**
          * @type {number}
         */
        "currentPage": number;
        /**
          * @type {boolean} a condition that indicates if last page has been reached
         */
        "lastPage": boolean;
    }
    /**
     * @prop {DisplayVariants} whatToDisplay - two variants: List or Gist
     * @prop {boolean} isLoading - condition of fetching data. Affects what will be shown:
     * loading skeleton or data
     * This properties only needed if List selected for display
     * @prop {IUserData} userMetadata - gists's owner data
     * @prop {IGistItem[]} gistsList - a page with a list of gists
     * @prop {number} currentPage - a number of showing page
     * @prop {boolean} lastPageReached - an indicator that last page was reached
     * @prop {number | null} allGistsNumber - a number of gists. This number is given whenever it possible
     * This properties only needed if Gist selected for display
     * @prop {IGistItem} singleGist
     * @prop {string} backToUserLogin - a user login, the list of files of which should be returned
     * by pressing the back button
     */
    interface MainWindow {
        /**
          * @type {number | null} - a number of gists. This number is given whenever it possible  [for LIST]
         */
        "allGistsNumber"?: number | null;
        /**
          * @type {string} - a user login, the list of files of which should be returned by pressing the back button [for GIST]
         */
        "backToUserLogin"?: string;
        /**
          * @type {number} - a number of showing page [for LIST]
         */
        "currentPage"?: number;
        /**
          * @type {IGistItem[]} - a page with a list of gists [for LIST]
         */
        "gistsList"?: IGistItem[];
        /**
          * @type {boolean} - condition of fetching data. Affects what will be shown: loading skeleton or data
         */
        "isLoading": boolean;
        /**
          * @type {boolean} - an indicator that last page was reached [for LIST]
         */
        "lastPageReached"?: boolean;
        /**
          * @type {IGistItem} [for GIST]
         */
        "singleGist"?: IGistItem;
        /**
          * @type {IUserData} - gists's owner data [for LIST]
         */
        "userMetadata"?: IUserData;
        /**
          * @type {DisplayVariants} two variants: List or Gist
         */
        "whatToDisplay": DisplayVariants;
    }
    /**
     * A small component that returns just a main window layout skeleton
     */
    interface MainWindowLayout {
    }
    /**
     * A component shows given metadata of gist
     * @prop {IGistMetadata} gistMetadata
     * @prop {IUserData} userData - a data of gist's owner
     * @event goToGist emits gist ID
     * @event goToUserGists emits user login
     */
    interface MetadataHeader {
        /**
          * @type {IGistMetadata}
         */
        "gistMetadata": IGistMetadata;
        /**
          * @type {IUserData} a data of gist's owner
         */
        "userData": IUserData;
    }
    interface MyComponent {
    }
    /**
     * A component shows relative time by given timestamp in Date format
     * @prop {Date} timestamp
     */
    interface RelativeTime {
        /**
          * @type {Date}
         */
        "timestamp": Date;
    }
    /**
     * A component shows single file in a gist and emits this file data by click
     * @prop {string} filename
     * @prop {string[]} code - an arary of code from file line by line
     * @prop {string} codeLang - code language
     * @event selectFileInsert - event that emits file data object
     */
    interface SingleFileView {
        /**
          * @type {string[]} - an arary of code from file line by line
         */
        "code": string[];
        /**
          * @type {string} - code language
         */
        "codeLang": string;
        /**
          * @type {string}
         */
        "filename": string;
    }
}
export interface BackToGistsListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBackToGistsListElement;
}
export interface CloseWindowCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCloseWindowElement;
}
export interface GistListItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGistListItemElement;
}
export interface ListPaginatorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLListPaginatorElement;
}
export interface MetadataHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMetadataHeaderElement;
}
export interface SingleFileViewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSingleFileViewElement;
}
declare global {
    interface HTMLBackToGistsListElementEventMap {
        "backToGistsListClick": any;
    }
    /**
     * A component that provides back to user gists list button
     * @prop {string} userLogin - a user login, the list of files of which should be returned
     * @event backToGistsListClick - emits that back button clicked
     * @listens onClick on itself
     */
    interface HTMLBackToGistsListElement extends Components.BackToGistsList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLBackToGistsListElementEventMap>(type: K, listener: (this: HTMLBackToGistsListElement, ev: BackToGistsListCustomEvent<HTMLBackToGistsListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLBackToGistsListElementEventMap>(type: K, listener: (this: HTMLBackToGistsListElement, ev: BackToGistsListCustomEvent<HTMLBackToGistsListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLBackToGistsListElement: {
        prototype: HTMLBackToGistsListElement;
        new (): HTMLBackToGistsListElement;
    };
    interface HTMLCloseWindowElementEventMap {
        "closeWindowClick": any;
    }
    /**
     * A component that provides close button
     * @event closeWindowClick
     * @listens onClick on itself
     */
    interface HTMLCloseWindowElement extends Components.CloseWindow, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCloseWindowElementEventMap>(type: K, listener: (this: HTMLCloseWindowElement, ev: CloseWindowCustomEvent<HTMLCloseWindowElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCloseWindowElementEventMap>(type: K, listener: (this: HTMLCloseWindowElement, ev: CloseWindowCustomEvent<HTMLCloseWindowElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCloseWindowElement: {
        prototype: HTMLCloseWindowElement;
        new (): HTMLCloseWindowElement;
    };
    /**
     * @param code - A property that takes an array of lines of code
     * @param lang - A programing language of this code
     * @returns An <pre> element with a strings of <code> line by line.
     * Uses {index + 1} to display the line number.
     * Uses Prismjs to highlight code
     */
    interface HTMLCodePreviewElement extends Components.CodePreview, HTMLStencilElement {
    }
    var HTMLCodePreviewElement: {
        prototype: HTMLCodePreviewElement;
        new (): HTMLCodePreviewElement;
    };
    /**
     * A component shows given gist description
     * @prop {string} description
     */
    interface HTMLGistDescriptionElement extends Components.GistDescription, HTMLStencilElement {
    }
    var HTMLGistDescriptionElement: {
        prototype: HTMLGistDescriptionElement;
        new (): HTMLGistDescriptionElement;
    };
    interface HTMLGistListItemElementEventMap {
        "goToGist": string;
    }
    /**
     * A component that shows metadata, description and code preview
     * of a given gist via the appropriate child components
     * @prop {IGistItem} gistListItem
     * @event goToGist emits ID of selected gist
     */
    interface HTMLGistListItemElement extends Components.GistListItem, HTMLStencilElement {
        addEventListener<K extends keyof HTMLGistListItemElementEventMap>(type: K, listener: (this: HTMLGistListItemElement, ev: GistListItemCustomEvent<HTMLGistListItemElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLGistListItemElementEventMap>(type: K, listener: (this: HTMLGistListItemElement, ev: GistListItemCustomEvent<HTMLGistListItemElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLGistListItemElement: {
        prototype: HTMLGistListItemElement;
        new (): HTMLGistListItemElement;
    };
    /**
     * A component shows single gist with all files in it and descriotion
     * Also this component intercepts gist ID to event when user choose a file
     * form gist
     * @prop {IGistFile} singleGist
     * @method selectFileInsertInterceptor - intercepts gist ID
     */
    interface HTMLGistViewerElement extends Components.GistViewer, HTMLStencilElement {
    }
    var HTMLGistViewerElement: {
        prototype: HTMLGistViewerElement;
        new (): HTMLGistViewerElement;
    };
    /**
     * A component shows list of given gists and paginator
     * @prop {IGistItem[]} gistsList - an array of gists
     * @prop {number} currentPage
     * @prop {boolean} lastPage - a condition that indicates if last page was reached.
     * It needs because there is some problems getting exact number of gists of the user.
     */
    interface HTMLGistsListElement extends Components.GistsList, HTMLStencilElement {
    }
    var HTMLGistsListElement: {
        prototype: HTMLGistsListElement;
        new (): HTMLGistsListElement;
    };
    interface HTMLListPaginatorElementEventMap {
        "goToPage": number;
    }
    /**
     * @prop {number} currentPage
     * @prop {boolean} lastPage - a condition that indicates if last page has been reached
     * @event goToPage emits next page number
     */
    interface HTMLListPaginatorElement extends Components.ListPaginator, HTMLStencilElement {
        addEventListener<K extends keyof HTMLListPaginatorElementEventMap>(type: K, listener: (this: HTMLListPaginatorElement, ev: ListPaginatorCustomEvent<HTMLListPaginatorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLListPaginatorElementEventMap>(type: K, listener: (this: HTMLListPaginatorElement, ev: ListPaginatorCustomEvent<HTMLListPaginatorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLListPaginatorElement: {
        prototype: HTMLListPaginatorElement;
        new (): HTMLListPaginatorElement;
    };
    /**
     * @prop {DisplayVariants} whatToDisplay - two variants: List or Gist
     * @prop {boolean} isLoading - condition of fetching data. Affects what will be shown:
     * loading skeleton or data
     * This properties only needed if List selected for display
     * @prop {IUserData} userMetadata - gists's owner data
     * @prop {IGistItem[]} gistsList - a page with a list of gists
     * @prop {number} currentPage - a number of showing page
     * @prop {boolean} lastPageReached - an indicator that last page was reached
     * @prop {number | null} allGistsNumber - a number of gists. This number is given whenever it possible
     * This properties only needed if Gist selected for display
     * @prop {IGistItem} singleGist
     * @prop {string} backToUserLogin - a user login, the list of files of which should be returned
     * by pressing the back button
     */
    interface HTMLMainWindowElement extends Components.MainWindow, HTMLStencilElement {
    }
    var HTMLMainWindowElement: {
        prototype: HTMLMainWindowElement;
        new (): HTMLMainWindowElement;
    };
    /**
     * A small component that returns just a main window layout skeleton
     */
    interface HTMLMainWindowLayoutElement extends Components.MainWindowLayout, HTMLStencilElement {
    }
    var HTMLMainWindowLayoutElement: {
        prototype: HTMLMainWindowLayoutElement;
        new (): HTMLMainWindowLayoutElement;
    };
    interface HTMLMetadataHeaderElementEventMap {
        "goToGist": string;
        "goToUserGists": string;
    }
    /**
     * A component shows given metadata of gist
     * @prop {IGistMetadata} gistMetadata
     * @prop {IUserData} userData - a data of gist's owner
     * @event goToGist emits gist ID
     * @event goToUserGists emits user login
     */
    interface HTMLMetadataHeaderElement extends Components.MetadataHeader, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMetadataHeaderElementEventMap>(type: K, listener: (this: HTMLMetadataHeaderElement, ev: MetadataHeaderCustomEvent<HTMLMetadataHeaderElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMetadataHeaderElementEventMap>(type: K, listener: (this: HTMLMetadataHeaderElement, ev: MetadataHeaderCustomEvent<HTMLMetadataHeaderElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMetadataHeaderElement: {
        prototype: HTMLMetadataHeaderElement;
        new (): HTMLMetadataHeaderElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    /**
     * A component shows relative time by given timestamp in Date format
     * @prop {Date} timestamp
     */
    interface HTMLRelativeTimeElement extends Components.RelativeTime, HTMLStencilElement {
    }
    var HTMLRelativeTimeElement: {
        prototype: HTMLRelativeTimeElement;
        new (): HTMLRelativeTimeElement;
    };
    interface HTMLSingleFileViewElementEventMap {
        "selectFileInsert": IGistFileInsert;
    }
    /**
     * A component shows single file in a gist and emits this file data by click
     * @prop {string} filename
     * @prop {string[]} code - an arary of code from file line by line
     * @prop {string} codeLang - code language
     * @event selectFileInsert - event that emits file data object
     */
    interface HTMLSingleFileViewElement extends Components.SingleFileView, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSingleFileViewElementEventMap>(type: K, listener: (this: HTMLSingleFileViewElement, ev: SingleFileViewCustomEvent<HTMLSingleFileViewElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSingleFileViewElementEventMap>(type: K, listener: (this: HTMLSingleFileViewElement, ev: SingleFileViewCustomEvent<HTMLSingleFileViewElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSingleFileViewElement: {
        prototype: HTMLSingleFileViewElement;
        new (): HTMLSingleFileViewElement;
    };
    interface HTMLElementTagNameMap {
        "back-to-gists-list": HTMLBackToGistsListElement;
        "close-window": HTMLCloseWindowElement;
        "code-preview": HTMLCodePreviewElement;
        "gist-description": HTMLGistDescriptionElement;
        "gist-list-item": HTMLGistListItemElement;
        "gist-viewer": HTMLGistViewerElement;
        "gists-list": HTMLGistsListElement;
        "list-paginator": HTMLListPaginatorElement;
        "main-window": HTMLMainWindowElement;
        "main-window-layout": HTMLMainWindowLayoutElement;
        "metadata-header": HTMLMetadataHeaderElement;
        "my-component": HTMLMyComponentElement;
        "relative-time": HTMLRelativeTimeElement;
        "single-file-view": HTMLSingleFileViewElement;
    }
}
declare namespace LocalJSX {
    /**
     * A component that provides back to user gists list button
     * @prop {string} userLogin - a user login, the list of files of which should be returned
     * @event backToGistsListClick - emits that back button clicked
     * @listens onClick on itself
     */
    interface BackToGistsList {
        "onBackToGistsListClick"?: (event: BackToGistsListCustomEvent<any>) => void;
        /**
          * @type {string} - a user login, the list of files of which should be returned
         */
        "userLogin"?: string;
    }
    /**
     * A component that provides close button
     * @event closeWindowClick
     * @listens onClick on itself
     */
    interface CloseWindow {
        "onCloseWindowClick"?: (event: CloseWindowCustomEvent<any>) => void;
    }
    /**
     * @param code - A property that takes an array of lines of code
     * @param lang - A programing language of this code
     * @returns An <pre> element with a strings of <code> line by line.
     * Uses {index + 1} to display the line number.
     * Uses Prismjs to highlight code
     */
    interface CodePreview {
        /**
          * @type {string[]} - Code Raw
         */
        "code"?: string[];
        /**
          * @type {string} - Code language
         */
        "codeLang"?: string;
    }
    /**
     * A component shows given gist description
     * @prop {string} description
     */
    interface GistDescription {
        "description"?: string;
    }
    /**
     * A component that shows metadata, description and code preview
     * of a given gist via the appropriate child components
     * @prop {IGistItem} gistListItem
     * @event goToGist emits ID of selected gist
     */
    interface GistListItem {
        "gistListItem"?: IGistItem;
        "onGoToGist"?: (event: GistListItemCustomEvent<string>) => void;
    }
    /**
     * A component shows single gist with all files in it and descriotion
     * Also this component intercepts gist ID to event when user choose a file
     * form gist
     * @prop {IGistFile} singleGist
     * @method selectFileInsertInterceptor - intercepts gist ID
     */
    interface GistViewer {
        "singleGist"?: IGistItem;
    }
    /**
     * A component shows list of given gists and paginator
     * @prop {IGistItem[]} gistsList - an array of gists
     * @prop {number} currentPage
     * @prop {boolean} lastPage - a condition that indicates if last page was reached.
     * It needs because there is some problems getting exact number of gists of the user.
     */
    interface GistsList {
        "currentPage"?: number;
        /**
          * @type {IGistItem[]} - an array of gists
         */
        "gistsList"?: IGistItem[];
        /**
          * @type {boolean} - a condition that indicates if last page was reached.
         */
        "lastPage"?: boolean;
    }
    /**
     * @prop {number} currentPage
     * @prop {boolean} lastPage - a condition that indicates if last page has been reached
     * @event goToPage emits next page number
     */
    interface ListPaginator {
        /**
          * @type {number}
         */
        "currentPage"?: number;
        /**
          * @type {boolean} a condition that indicates if last page has been reached
         */
        "lastPage"?: boolean;
        /**
          * @event goToPage emits next page number
         */
        "onGoToPage"?: (event: ListPaginatorCustomEvent<number>) => void;
    }
    /**
     * @prop {DisplayVariants} whatToDisplay - two variants: List or Gist
     * @prop {boolean} isLoading - condition of fetching data. Affects what will be shown:
     * loading skeleton or data
     * This properties only needed if List selected for display
     * @prop {IUserData} userMetadata - gists's owner data
     * @prop {IGistItem[]} gistsList - a page with a list of gists
     * @prop {number} currentPage - a number of showing page
     * @prop {boolean} lastPageReached - an indicator that last page was reached
     * @prop {number | null} allGistsNumber - a number of gists. This number is given whenever it possible
     * This properties only needed if Gist selected for display
     * @prop {IGistItem} singleGist
     * @prop {string} backToUserLogin - a user login, the list of files of which should be returned
     * by pressing the back button
     */
    interface MainWindow {
        /**
          * @type {number | null} - a number of gists. This number is given whenever it possible  [for LIST]
         */
        "allGistsNumber"?: number | null;
        /**
          * @type {string} - a user login, the list of files of which should be returned by pressing the back button [for GIST]
         */
        "backToUserLogin"?: string;
        /**
          * @type {number} - a number of showing page [for LIST]
         */
        "currentPage"?: number;
        /**
          * @type {IGistItem[]} - a page with a list of gists [for LIST]
         */
        "gistsList"?: IGistItem[];
        /**
          * @type {boolean} - condition of fetching data. Affects what will be shown: loading skeleton or data
         */
        "isLoading"?: boolean;
        /**
          * @type {boolean} - an indicator that last page was reached [for LIST]
         */
        "lastPageReached"?: boolean;
        /**
          * @type {IGistItem} [for GIST]
         */
        "singleGist"?: IGistItem;
        /**
          * @type {IUserData} - gists's owner data [for LIST]
         */
        "userMetadata"?: IUserData;
        /**
          * @type {DisplayVariants} two variants: List or Gist
         */
        "whatToDisplay"?: DisplayVariants;
    }
    /**
     * A small component that returns just a main window layout skeleton
     */
    interface MainWindowLayout {
    }
    /**
     * A component shows given metadata of gist
     * @prop {IGistMetadata} gistMetadata
     * @prop {IUserData} userData - a data of gist's owner
     * @event goToGist emits gist ID
     * @event goToUserGists emits user login
     */
    interface MetadataHeader {
        /**
          * @type {IGistMetadata}
         */
        "gistMetadata"?: IGistMetadata;
        "onGoToGist"?: (event: MetadataHeaderCustomEvent<string>) => void;
        "onGoToUserGists"?: (event: MetadataHeaderCustomEvent<string>) => void;
        /**
          * @type {IUserData} a data of gist's owner
         */
        "userData"?: IUserData;
    }
    interface MyComponent {
    }
    /**
     * A component shows relative time by given timestamp in Date format
     * @prop {Date} timestamp
     */
    interface RelativeTime {
        /**
          * @type {Date}
         */
        "timestamp": Date;
    }
    /**
     * A component shows single file in a gist and emits this file data by click
     * @prop {string} filename
     * @prop {string[]} code - an arary of code from file line by line
     * @prop {string} codeLang - code language
     * @event selectFileInsert - event that emits file data object
     */
    interface SingleFileView {
        /**
          * @type {string[]} - an arary of code from file line by line
         */
        "code"?: string[];
        /**
          * @type {string} - code language
         */
        "codeLang"?: string;
        /**
          * @type {string}
         */
        "filename"?: string;
        /**
          * Emits gist file data object that user clicked
          * @type {IGistFileInsert}
          * @event
         */
        "onSelectFileInsert"?: (event: SingleFileViewCustomEvent<IGistFileInsert>) => void;
    }
    interface IntrinsicElements {
        "back-to-gists-list": BackToGistsList;
        "close-window": CloseWindow;
        "code-preview": CodePreview;
        "gist-description": GistDescription;
        "gist-list-item": GistListItem;
        "gist-viewer": GistViewer;
        "gists-list": GistsList;
        "list-paginator": ListPaginator;
        "main-window": MainWindow;
        "main-window-layout": MainWindowLayout;
        "metadata-header": MetadataHeader;
        "my-component": MyComponent;
        "relative-time": RelativeTime;
        "single-file-view": SingleFileView;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * A component that provides back to user gists list button
             * @prop {string} userLogin - a user login, the list of files of which should be returned
             * @event backToGistsListClick - emits that back button clicked
             * @listens onClick on itself
             */
            "back-to-gists-list": LocalJSX.BackToGistsList & JSXBase.HTMLAttributes<HTMLBackToGistsListElement>;
            /**
             * A component that provides close button
             * @event closeWindowClick
             * @listens onClick on itself
             */
            "close-window": LocalJSX.CloseWindow & JSXBase.HTMLAttributes<HTMLCloseWindowElement>;
            /**
             * @param code - A property that takes an array of lines of code
             * @param lang - A programing language of this code
             * @returns An <pre> element with a strings of <code> line by line.
             * Uses {index + 1} to display the line number.
             * Uses Prismjs to highlight code
             */
            "code-preview": LocalJSX.CodePreview & JSXBase.HTMLAttributes<HTMLCodePreviewElement>;
            /**
             * A component shows given gist description
             * @prop {string} description
             */
            "gist-description": LocalJSX.GistDescription & JSXBase.HTMLAttributes<HTMLGistDescriptionElement>;
            /**
             * A component that shows metadata, description and code preview
             * of a given gist via the appropriate child components
             * @prop {IGistItem} gistListItem
             * @event goToGist emits ID of selected gist
             */
            "gist-list-item": LocalJSX.GistListItem & JSXBase.HTMLAttributes<HTMLGistListItemElement>;
            /**
             * A component shows single gist with all files in it and descriotion
             * Also this component intercepts gist ID to event when user choose a file
             * form gist
             * @prop {IGistFile} singleGist
             * @method selectFileInsertInterceptor - intercepts gist ID
             */
            "gist-viewer": LocalJSX.GistViewer & JSXBase.HTMLAttributes<HTMLGistViewerElement>;
            /**
             * A component shows list of given gists and paginator
             * @prop {IGistItem[]} gistsList - an array of gists
             * @prop {number} currentPage
             * @prop {boolean} lastPage - a condition that indicates if last page was reached.
             * It needs because there is some problems getting exact number of gists of the user.
             */
            "gists-list": LocalJSX.GistsList & JSXBase.HTMLAttributes<HTMLGistsListElement>;
            /**
             * @prop {number} currentPage
             * @prop {boolean} lastPage - a condition that indicates if last page has been reached
             * @event goToPage emits next page number
             */
            "list-paginator": LocalJSX.ListPaginator & JSXBase.HTMLAttributes<HTMLListPaginatorElement>;
            /**
             * @prop {DisplayVariants} whatToDisplay - two variants: List or Gist
             * @prop {boolean} isLoading - condition of fetching data. Affects what will be shown:
             * loading skeleton or data
             * This properties only needed if List selected for display
             * @prop {IUserData} userMetadata - gists's owner data
             * @prop {IGistItem[]} gistsList - a page with a list of gists
             * @prop {number} currentPage - a number of showing page
             * @prop {boolean} lastPageReached - an indicator that last page was reached
             * @prop {number | null} allGistsNumber - a number of gists. This number is given whenever it possible
             * This properties only needed if Gist selected for display
             * @prop {IGistItem} singleGist
             * @prop {string} backToUserLogin - a user login, the list of files of which should be returned
             * by pressing the back button
             */
            "main-window": LocalJSX.MainWindow & JSXBase.HTMLAttributes<HTMLMainWindowElement>;
            /**
             * A small component that returns just a main window layout skeleton
             */
            "main-window-layout": LocalJSX.MainWindowLayout & JSXBase.HTMLAttributes<HTMLMainWindowLayoutElement>;
            /**
             * A component shows given metadata of gist
             * @prop {IGistMetadata} gistMetadata
             * @prop {IUserData} userData - a data of gist's owner
             * @event goToGist emits gist ID
             * @event goToUserGists emits user login
             */
            "metadata-header": LocalJSX.MetadataHeader & JSXBase.HTMLAttributes<HTMLMetadataHeaderElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            /**
             * A component shows relative time by given timestamp in Date format
             * @prop {Date} timestamp
             */
            "relative-time": LocalJSX.RelativeTime & JSXBase.HTMLAttributes<HTMLRelativeTimeElement>;
            /**
             * A component shows single file in a gist and emits this file data by click
             * @prop {string} filename
             * @prop {string[]} code - an arary of code from file line by line
             * @prop {string} codeLang - code language
             * @event selectFileInsert - event that emits file data object
             */
            "single-file-view": LocalJSX.SingleFileView & JSXBase.HTMLAttributes<HTMLSingleFileViewElement>;
        }
    }
}
