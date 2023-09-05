import { LitElement } from 'lit';
import '@vaadin/grid/theme/material/vaadin-grid.js';
import '@vaadin/grid/theme/material/vaadin-grid-filter-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-selection-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-sort-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-tree-column.js';
export interface TableHeaderObj {
    id: string;
    label?: string;
    type?: 'ACTION' | 'SHARE-DOWMLOAD';
    alwaysShow?: boolean;
}
export declare class DataTable extends LitElement {
    tableData: any;
    multiSort: boolean;
    columnReorderingAllowed: boolean;
    allRowsVisible: boolean;
    actionItems: string[];
    enableExpansion: boolean;
    headData: TableHeaderObj[];
    private hideColumn;
    private detailsOpenedItem;
    static styles: import("lit").CSSResult;
    private actionRenderer;
    private iconClickHandler;
    private renderShareAndDownloadIcons;
    protected firstUpdated(): void;
    private shareRenderer;
    private expansionRenderer;
    private renderTable;
    private renderExpansionDetails;
    render: () => import("lit").TemplateResult<1>;
}
