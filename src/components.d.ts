/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
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
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
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
    interface HTMLElementTagNameMap {
        "code-preview": HTMLCodePreviewElement;
        "metadata-header": HTMLMetadataHeaderElement;
        "my-component": HTMLMyComponentElement;
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
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "code-preview": CodePreview;
        "metadata-header": MetadataHeader;
        "my-component": MyComponent;
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
            "metadata-header": LocalJSX.MetadataHeader & JSXBase.HTMLAttributes<HTMLMetadataHeaderElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
