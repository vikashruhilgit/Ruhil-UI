import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import '@vaadin/menu-bar/theme/material/vaadin-menu-bar.js';
import { styles } from './TableMenuWrapper.css';
import { eventObj } from '../../../utility/util';
export class TableMenuWrapper extends LitElement {
    constructor() {
        super(...arguments);
        this.itemClicked = (e) => {
            var _a;
            const eventData = { ...e.detail, ...(_a = this.model) === null || _a === void 0 ? void 0 : _a.item };
            this.dispatchEvent(eventObj('ft:table-action-clicked', eventData));
        };
        this.renderIcon = () => {
            const item = document.createElement('vaadin-context-menu-item');
            const icon = document.createElement('ru-icon');
            icon.innerHTML = 'more_horiz';
            item.appendChild(icon);
            return item;
        };
        this.render = () => html `
      <div class="action-table">
        <vaadin-menu-bar
          theme="tertiary-inline"
          .items="${this.items}"
          @item-selected="${this.itemClicked}"
        ></vaadin-menu-bar>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.actionItems) {
            const actionChildren = this.actionItems.map(single => {
                const item = {};
                item.text = single.toUpperCase();
                return item;
            });
            this.items = [
                {
                    component: this.renderIcon(),
                    children: actionChildren,
                },
            ];
        }
    }
}
TableMenuWrapper.styles = styles;
__decorate([
    property({ type: Object })
], TableMenuWrapper.prototype, "model", void 0);
__decorate([
    property({ type: Array })
], TableMenuWrapper.prototype, "actionItems", void 0);
__decorate([
    state()
], TableMenuWrapper.prototype, "items", void 0);
//# sourceMappingURL=TableMenuWrapper.js.map