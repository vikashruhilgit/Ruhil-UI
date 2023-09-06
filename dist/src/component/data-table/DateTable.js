import { __decorate } from "tslib";
/* eslint-disable no-return-assign */
import { html, LitElement, render } from 'lit';
import { property, state } from 'lit/decorators.js';
import { guard } from 'lit/directives/guard.js';
import '@vaadin/grid/theme/material/vaadin-grid.js';
import '@vaadin/grid/theme/material/vaadin-grid-filter-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-selection-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-sort-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-tree-column.js';
import { styles } from './DateTable.css';
import { camelCaseToString, eventObj } from '../../utility/util';
export class DataTable extends LitElement {
    constructor() {
        super(...arguments);
        this.multiSort = false;
        this.columnReorderingAllowed = false;
        this.allRowsVisible = false;
        this.actionItems = [];
        this.enableExpansion = false;
        this.headData = [];
        this.hideColumn = false;
        this.detailsOpenedItem = [];
        this.actionRenderer = (root, _, model) => {
            render(html `
        <ru-table-menu-wrapper
          .actionItems="${this.actionItems}"
          .model=${model}
        ></ru-table-menu-wrapper>
      `, root);
        };
        this.iconClickHandler = (model, icon) => {
            const eventData = { icon, ...model === null || model === void 0 ? void 0 : model.item };
            this.dispatchEvent(eventObj('ft:table-icon-clicked', eventData));
        };
        this.renderShareAndDownloadIcons = (model) => html `
    <div class="dt-share-download">
      <ru-icon
        @click=${() => this.iconClickHandler(model, 'share')}
        class="dt-share-icon"
        >share</ru-icon
      >
      <ru-icon
        @click=${() => this.iconClickHandler(model, 'download')}
        class="dt-download-icon"
        >download</ru-icon
      >
    </div>
  `;
        this.shareRenderer = (root, _, model) => {
            render(this.renderShareAndDownloadIcons(model), root);
        };
        this.expansionRenderer = (root, _, model) => {
            render(html `
        <div class="dt-expansion-download">
          ${model.detailsOpened
                ? html ` <ru-icon class="dt-less-icon">expand_less</ru-icon>`
                : html ` <ru-icon class="dt-more-icon">expand_more</ru-icon>`}
        </div>
      `, root);
        };
        this.renderTable = (head) => {
            const rows = head.map((single) => {
                switch (single.type) {
                    case 'ACTION':
                        return html `<vaadin-grid-sort-column
            header="Action"
            text-align="center"
            flex-grow="0"
            .hidden=${this.hideColumn}
            .renderer="${this.actionRenderer}"
          ></vaadin-grid-sort-column>`;
                    case 'SHARE-DOWMLOAD':
                        return html `<vaadin-grid-sort-column
            header="Share or Download"
            .hidden=${this.hideColumn}
            .renderer="${this.shareRenderer}"
          ></vaadin-grid-sort-column>`;
                    default:
                        return html ` <vaadin-grid-sort-column
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
                rows.push(html ` <vaadin-grid-sort-column
        header=""
        text-align="center"
        flex-grow="0"
        .renderer="${this.expansionRenderer}"
      >
      </vaadin-grid-sort-column>`);
            }
            return rows;
        };
        this.renderExpansionDetails = (model) => {
            const renderItems = this.headData
                .filter((single) => !single.alwaysShow && !single.type)
                .map((single) => html `
            <div class="dt-table-expansion">
              <p>
                ${single.label ? single.label : camelCaseToString(single.id)}
              </p>
            </div>
            <div>
              <p class="dt-table-expansion-values">${model.item[single.id]}</p>
            </div>
          `);
            return html `<div class="dt-expansion-container">
      <div class="dt-expansion-detail">${renderItems}</div>
      <div class="dt-expansion-action-warpper">
        <div class="dt-expansion-share">
          ${this.renderShareAndDownloadIcons(model)}
        </div>
        <div class="dt-expansion-action">
          <ru-table-menu-wrapper
            .actionItems="${this.actionItems}"
            .model=${model}
          ></ru-table-menu-wrapper>
        </div>
      </div>
    </div>`;
        };
        this.render = () => {
            if (this.enableExpansion && window.screen.width < 768) {
                this.hideColumn = true;
            }
            return html `<vaadin-grid
      class="ru-table-grid"
      .detailsOpenedItems="${this.hideColumn ? this.detailsOpenedItem : null}"
      @active-item-changed="${this.hideColumn
                ? (e) => (this.detailsOpenedItem = [e.detail.value])
                : null}"
      .rowDetailsRenderer="${this.hideColumn
                ? guard([], () => (root, _, model) => {
                    // TODO: remove -this and use obj for values
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    render(this.renderExpansionDetails(model), root);
                })
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
    firstUpdated() {
        var _a, _b;
        const grid = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('vaadin-grid');
        const table = (_b = grid === null || grid === void 0 ? void 0 : grid.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('table');
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
}
DataTable.styles = styles;
__decorate([
    property({ type: Array })
], DataTable.prototype, "tableData", void 0);
__decorate([
    property({ type: Boolean })
], DataTable.prototype, "multiSort", void 0);
__decorate([
    property({ type: Boolean })
], DataTable.prototype, "columnReorderingAllowed", void 0);
__decorate([
    property({ type: Boolean })
], DataTable.prototype, "allRowsVisible", void 0);
__decorate([
    property({ type: Array })
], DataTable.prototype, "actionItems", void 0);
__decorate([
    property({ type: Boolean })
], DataTable.prototype, "enableExpansion", void 0);
__decorate([
    property({ type: Array })
], DataTable.prototype, "headData", void 0);
__decorate([
    state()
], DataTable.prototype, "detailsOpenedItem", void 0);
//# sourceMappingURL=DateTable.js.map