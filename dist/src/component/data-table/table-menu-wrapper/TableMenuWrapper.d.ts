import { LitElement } from 'lit';
import { GridItemModel } from '@vaadin/grid';
import '@vaadin/menu-bar/theme/material/vaadin-menu-bar.js';
export declare class TableMenuWrapper extends LitElement {
    model?: GridItemModel<any>;
    actionItems?: string[];
    items: any;
    static styles: import("lit").CSSResult;
    private itemClicked;
    connectedCallback(): void;
    private renderIcon;
    render: () => import("lit").TemplateResult<1>;
}
