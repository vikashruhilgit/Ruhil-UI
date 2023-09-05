import { LitElement } from 'lit';
export interface ItemModal {
    id?: string;
    icon?: string;
    label: string;
}
export declare class LeftDrawer extends LitElement {
    open: boolean;
    items: ItemModal[];
    static styles: import("lit").CSSResult;
    animateDrawer: () => void;
    clickHandler: (item: ItemModal) => void;
    render(): import("lit").TemplateResult<1>;
}
