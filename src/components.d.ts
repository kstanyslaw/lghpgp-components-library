/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IGistListItem } from "./common/interfaces/gist-list-item.interface";
export { IGistListItem } from "./common/interfaces/gist-list-item.interface";
export namespace Components {
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
    interface MetadataHeader {
        "avatarUrl": string;
        "comments": number;
        "fileName": string;
        "files": number;
        "forks": number;
        "gistUrl": string;
        "isSecret": boolean;
        "lastActive": Date;
        "stars": number;
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
export interface GistListItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGistListItemElement;
}
export interface ListPaginatorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLListPaginatorElement;
}
export interface SingleFileViewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSingleFileViewElement;
}
declare global {
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
        "gistSelected": string;
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
    interface HTMLMetadataHeaderElement extends Components.MetadataHeader, HTMLStencilElement {
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
        "selectFileInsert": {
    code: string[],
    fileName: string,
    codeLang: string,
  };
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
        "code-preview": HTMLCodePreviewElement;
        "gist-list-item": HTMLGistListItemElement;
        "gist-viewer": HTMLGistViewerElement;
        "gists-list": HTMLGistsListElement;
        "list-paginator": HTMLListPaginatorElement;
        "metadata-header": HTMLMetadataHeaderElement;
        "my-component": HTMLMyComponentElement;
        "relative-time": HTMLRelativeTimeElement;
        "single-file-view": HTMLSingleFileViewElement;
    }
}
declare namespace LocalJSX {
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
        "onGistSelected"?: (event: GistListItemCustomEvent<string>) => void;
    }
    interface GistViewer {
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
    interface MetadataHeader {
        "avatarUrl"?: string;
        "comments": number;
        "fileName": string;
        "files": number;
        "forks": number;
        "gistUrl": string;
        "isSecret": boolean;
        "lastActive"?: Date;
        "stars": number;
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
        "onSelectFileInsert"?: (event: SingleFileViewCustomEvent<{
    code: string[],
    fileName: string,
    codeLang: string,
  }>) => void;
    }
    interface IntrinsicElements {
        "code-preview": CodePreview;
        "gist-list-item": GistListItem;
        "gist-viewer": GistViewer;
        "gists-list": GistsList;
        "list-paginator": ListPaginator;
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
            "metadata-header": LocalJSX.MetadataHeader & JSXBase.HTMLAttributes<HTMLMetadataHeaderElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "relative-time": LocalJSX.RelativeTime & JSXBase.HTMLAttributes<HTMLRelativeTimeElement>;
            "single-file-view": LocalJSX.SingleFileView & JSXBase.HTMLAttributes<HTMLSingleFileViewElement>;
        }
    }
}
