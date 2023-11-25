/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IGistListItem } from "./common/interfaces/gist-list-item.interface";
import { IGistMetadata } from "./common/interfaces/gist-data.interface";
import { IGistFile, IGistFileInsert } from "./common/interfaces/gist-file.interface";
export { IGistListItem } from "./common/interfaces/gist-list-item.interface";
export { IGistMetadata } from "./common/interfaces/gist-data.interface";
export { IGistFile, IGistFileInsert } from "./common/interfaces/gist-file.interface";
export namespace Components {
    interface BackToGistsList {
    }
    interface CloseWindow {
    }
    /**
     * @param code - A property that takes an array of lines of code
     * @param lang - A programing language of this code
     * @returns A table of strings line by line.
     * Uses {index + 1} to display the line number.
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
    interface GistListItem {
        "gistListItem": IGistListItem;
    }
    interface GistViewer {
        "gistFiles"?: IGistFile[];
        "gistMetadata": IGistMetadata;
    }
    interface GistsList {
        "currentPage": number;
        "gistsList": IGistListItem[];
        "lastPage": boolean;
    }
    interface ListPaginator {
        "currentPage": number;
        "lastPage": boolean;
    }
    interface MainWindow {
    }
    interface MetadataHeader {
        "commentsNumber"?: number;
        "fileName": string;
        "filesNumber"?: number;
        "forksNumber"?: number;
        "gistId": string;
        "isSecret": boolean;
        "lastActive": Date;
        "starsNumber"?: number;
        "userAvatarUrl"?: string;
        "userName": string;
        "userNameUrl": string;
    }
    interface MyComponent {
    }
    interface RelativeTime {
        "timestamp": Date;
    }
    interface SingleFileView {
        "code": string[];
        "codeLang": string;
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
     * @returns A table of strings line by line.
     * Uses {index + 1} to display the line number.
     */
    interface HTMLCodePreviewElement extends Components.CodePreview, HTMLStencilElement {
    }
    var HTMLCodePreviewElement: {
        prototype: HTMLCodePreviewElement;
        new (): HTMLCodePreviewElement;
    };
    interface HTMLGistListItemElementEventMap {
        "goToGist": string;
    }
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
    interface HTMLGistViewerElement extends Components.GistViewer, HTMLStencilElement {
    }
    var HTMLGistViewerElement: {
        prototype: HTMLGistViewerElement;
        new (): HTMLGistViewerElement;
    };
    interface HTMLGistsListElement extends Components.GistsList, HTMLStencilElement {
    }
    var HTMLGistsListElement: {
        prototype: HTMLGistsListElement;
        new (): HTMLGistsListElement;
    };
    interface HTMLListPaginatorElementEventMap {
        "goToPage": number;
    }
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
    interface HTMLMainWindowElement extends Components.MainWindow, HTMLStencilElement {
    }
    var HTMLMainWindowElement: {
        prototype: HTMLMainWindowElement;
        new (): HTMLMainWindowElement;
    };
    interface HTMLMetadataHeaderElementEventMap {
        "goToGist": string;
        "goToUserGists": string;
    }
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
    interface HTMLRelativeTimeElement extends Components.RelativeTime, HTMLStencilElement {
    }
    var HTMLRelativeTimeElement: {
        prototype: HTMLRelativeTimeElement;
        new (): HTMLRelativeTimeElement;
    };
    interface HTMLSingleFileViewElementEventMap {
        "selectFileInsert": IGistFileInsert;
    }
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
        "gist-list-item": HTMLGistListItemElement;
        "gist-viewer": HTMLGistViewerElement;
        "gists-list": HTMLGistsListElement;
        "list-paginator": HTMLListPaginatorElement;
        "main-window": HTMLMainWindowElement;
        "metadata-header": HTMLMetadataHeaderElement;
        "my-component": HTMLMyComponentElement;
        "relative-time": HTMLRelativeTimeElement;
        "single-file-view": HTMLSingleFileViewElement;
    }
}
declare namespace LocalJSX {
    interface BackToGistsList {
        "onBackToGistsListClick"?: (event: BackToGistsListCustomEvent<any>) => void;
    }
    interface CloseWindow {
        "onCloseWindowClick"?: (event: CloseWindowCustomEvent<any>) => void;
    }
    /**
     * @param code - A property that takes an array of lines of code
     * @param lang - A programing language of this code
     * @returns A table of strings line by line.
     * Uses {index + 1} to display the line number.
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
    interface GistListItem {
        "gistListItem"?: IGistListItem;
        "onGoToGist"?: (event: GistListItemCustomEvent<string>) => void;
    }
    interface GistViewer {
        "gistFiles"?: IGistFile[];
        "gistMetadata"?: IGistMetadata;
    }
    interface GistsList {
        "currentPage"?: number;
        "gistsList"?: IGistListItem[];
        "lastPage"?: boolean;
    }
    interface ListPaginator {
        "currentPage"?: number;
        "lastPage"?: boolean;
        "onGoToPage"?: (event: ListPaginatorCustomEvent<number>) => void;
    }
    interface MainWindow {
    }
    interface MetadataHeader {
        "commentsNumber"?: number;
        "fileName": string;
        "filesNumber"?: number;
        "forksNumber"?: number;
        "gistId": string;
        "isSecret": boolean;
        "lastActive"?: Date;
        "onGoToGist"?: (event: MetadataHeaderCustomEvent<string>) => void;
        "onGoToUserGists"?: (event: MetadataHeaderCustomEvent<string>) => void;
        "starsNumber"?: number;
        "userAvatarUrl"?: string;
        "userName": string;
        "userNameUrl": string;
    }
    interface MyComponent {
    }
    interface RelativeTime {
        "timestamp": Date;
    }
    interface SingleFileView {
        "code"?: string[];
        "codeLang"?: string;
        "filename"?: string;
        "onSelectFileInsert"?: (event: SingleFileViewCustomEvent<IGistFileInsert>) => void;
    }
    interface IntrinsicElements {
        "back-to-gists-list": BackToGistsList;
        "close-window": CloseWindow;
        "code-preview": CodePreview;
        "gist-list-item": GistListItem;
        "gist-viewer": GistViewer;
        "gists-list": GistsList;
        "list-paginator": ListPaginator;
        "main-window": MainWindow;
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
            "back-to-gists-list": LocalJSX.BackToGistsList & JSXBase.HTMLAttributes<HTMLBackToGistsListElement>;
            "close-window": LocalJSX.CloseWindow & JSXBase.HTMLAttributes<HTMLCloseWindowElement>;
            /**
             * @param code - A property that takes an array of lines of code
             * @param lang - A programing language of this code
             * @returns A table of strings line by line.
             * Uses {index + 1} to display the line number.
             */
            "code-preview": LocalJSX.CodePreview & JSXBase.HTMLAttributes<HTMLCodePreviewElement>;
            "gist-list-item": LocalJSX.GistListItem & JSXBase.HTMLAttributes<HTMLGistListItemElement>;
            "gist-viewer": LocalJSX.GistViewer & JSXBase.HTMLAttributes<HTMLGistViewerElement>;
            "gists-list": LocalJSX.GistsList & JSXBase.HTMLAttributes<HTMLGistsListElement>;
            "list-paginator": LocalJSX.ListPaginator & JSXBase.HTMLAttributes<HTMLListPaginatorElement>;
            "main-window": LocalJSX.MainWindow & JSXBase.HTMLAttributes<HTMLMainWindowElement>;
            "metadata-header": LocalJSX.MetadataHeader & JSXBase.HTMLAttributes<HTMLMetadataHeaderElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "relative-time": LocalJSX.RelativeTime & JSXBase.HTMLAttributes<HTMLRelativeTimeElement>;
            "single-file-view": LocalJSX.SingleFileView & JSXBase.HTMLAttributes<HTMLSingleFileViewElement>;
        }
    }
}
