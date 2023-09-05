import { LitElement } from 'lit';
export declare class Loader extends LitElement {
    count: string;
    classes: never[];
    styleOverrides: {
        [k: string]: any;
    };
    static styles: import("lit").CSSResult;
    renderLoaderItems(items: string[]): import("lit").TemplateResult<1>[];
    render(): import("lit").TemplateResult<1>;
}
