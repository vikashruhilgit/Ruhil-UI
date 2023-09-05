/* eslint-disable no-return-assign */
import { html, LitElement, render } from 'lit';
import { property, state } from 'lit/decorators.js';
import { guard } from 'lit/directives/guard.js';

import { GridItemModel, Grid, GridActiveItemChangedEvent } from '@vaadin/grid';

import '@vaadin/grid/theme/material/vaadin-grid.js';
import '@vaadin/grid/theme/material/vaadin-grid-filter-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-selection-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-sort-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-tree-column.js';

import { styles } from './DateTable.css';
import { camelCaseToString, eventObj } from '../../utility/util';

export interface TableHeaderObj {
  id: string;
  label?: string;
  type?: 'ACTION' | 'SHARE-DOWMLOAD';
  alwaysShow?: boolean;
}

export class DataTable extends LitElement {
  @property({ type: Array }) tableData: any;

  @property({ type: Boolean }) multiSort: boolean = false;

  @property({ type: Boolean }) columnReorderingAllowed: boolean = false;

  @property({ type: Boolean }) allRowsVisible: boolean = false;

  @property({ type: Array }) actionItems: string[] = [];

  @property({ type: Boolean }) enableExpansion: boolean = false;

  @property({ type: Array }) headData: TableHeaderObj[] = [];

  private hideColumn: boolean = false;

  @state()
  private detailsOpenedItem: any = [];

  static styles = styles;

  private actionRenderer = (
    root: HTMLElement,
    _: HTMLElement,
    model: GridItemModel<any>
  ) => {
    render(
      html`
        <ft-table-menu-wrapper
          .actionItems="${this.actionItems}"
          .model=${model}
        ></ft-table-menu-wrapper>
      `,
      root
    );
  };

  private iconClickHandler = (model: GridItemModel<any>, icon: string) => {
    const eventData = { icon, ...model?.item };
    this.dispatchEvent(eventObj('ft:table-icon-clicked', eventData));
  };

  private renderShareAndDownloadIcons = (model: GridItemModel<any>) => html`
    <div class="dt-share-download">
      <ft-icon
        @click=${() => this.iconClickHandler(model, 'share')}
        class="dt-share-icon"
        >share</ft-icon
      >
      <ft-icon
        @click=${() => this.iconClickHandler(model, 'download')}
        class="dt-download-icon"
        >download</ft-icon
      >
    </div>
  `;

  protected firstUpdated(): void {
    const grid: any = this.shadowRoot?.querySelector('vaadin-grid');
    const table: any = grid?.shadowRoot?.querySelector('table');
    if (table) {
      table.addEventListener('scroll', () => {
        setTimeout(() => {
          if (grid.getAttribute('overflow') === 'top') {
            this.dispatchEvent(eventObj('ft:table-scroll-end', { end: true }));
          }
        });
      });
    }
  }

  private shareRenderer = (
    root: HTMLElement,
    _: HTMLElement,
    model: GridItemModel<any>
  ) => {
    render(this.renderShareAndDownloadIcons(model), root);
  };

  private expansionRenderer = (
    root: HTMLElement,
    _: HTMLElement,
    model: GridItemModel<any>
  ) => {
    render(
      html`
        <div class="dt-expansion-download">
          ${model.detailsOpened
            ? html` <ft-icon class="dt-less-icon">expand_less</ft-icon>`
            : html` <ft-icon class="dt-more-icon">expand_more</ft-icon>`}
        </div>
      `,
      root
    );
  };

  private renderTable = (head: TableHeaderObj[]) => {
    const rows = head.map((single: TableHeaderObj) => {
      switch (single.type) {
        case 'ACTION':
          return html`<vaadin-grid-sort-column
            header="Action"
            text-align="center"
            flex-grow="0"
            .hidden=${this.hideColumn}
            .renderer="${this.actionRenderer}"
          ></vaadin-grid-sort-column>`;
        case 'SHARE-DOWMLOAD':
          return html`<vaadin-grid-sort-column
            header="Share or Download"
            .hidden=${this.hideColumn}
            .renderer="${this.shareRenderer}"
          ></vaadin-grid-sort-column>`;
        default:
          return html` <vaadin-grid-sort-column
            header="${single.label ? single.label : ''}"
            auto-width
            flex-grow="1"
            path="${single.id}"
            .hidden=${this.hideColumn && !single.alwaysShow}
            .alwaysShow="${single.alwaysShow}"
          ></vaadin-grid-sort-column>`;
      }
    });

    if (this.hideColumn) {
      rows.push(html` <vaadin-grid-sort-column
        header=""
        text-align="center"
        flex-grow="0"
        .renderer="${this.expansionRenderer}"
      >
      </vaadin-grid-sort-column>`);
    }
    return rows;
  };

  private renderExpansionDetails = (model: GridItemModel<any>) => {
    const renderItems = this.headData
      .filter((single: TableHeaderObj) => !single.alwaysShow && !single.type)
      .map(
        (single: TableHeaderObj) =>
          html`
            <div class="dt-table-expansion">
              <p>
                ${single.label ? single.label : camelCaseToString(single.id)}
              </p>
            </div>
            <div>
              <p class="dt-table-expansion-values">${model.item[single.id]}</p>
            </div>
          `
      );

    return html`<div class="dt-expansion-container">
      <div class="dt-expansion-detail">${renderItems}</div>
      <div class="dt-expansion-action-warpper">
        <div class="dt-expansion-share">
          ${this.renderShareAndDownloadIcons(model)}
        </div>
        <div class="dt-expansion-action">
          <ft-table-menu-wrapper
            .actionItems="${this.actionItems}"
            .model=${model}
          ></ft-table-menu-wrapper>
        </div>
      </div>
    </div>`;
  };

  render = () => {
    if (this.enableExpansion && window.screen.width < 768) {
      this.hideColumn = true;
    }
    return html`<vaadin-grid
      class="ft-table-grid"
      .detailsOpenedItems="${this.hideColumn ? this.detailsOpenedItem : null}"
      @active-item-changed="${this.hideColumn
        ? (e: GridActiveItemChangedEvent<any>) =>
            (this.detailsOpenedItem = [e.detail.value])
        : null}"
      .rowDetailsRenderer="${this.hideColumn
        ? guard(
            [],
            () => (root: HTMLElement, _: Grid, model: GridItemModel<any>) => {
              // TODO: remove -this and use obj for values
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render(this.renderExpansionDetails(model), root);
            }
          )
        : null}"
      .items="${this.tableData}"
      .multiSort=${this.multiSort}
      .allRowsVisible=${this.allRowsVisible}
      .columnReorderingAllowed=${this.columnReorderingAllowed}
    >
      ${this.renderTable(this.headData)}
    </vaadin-grid>`;
  };
}
