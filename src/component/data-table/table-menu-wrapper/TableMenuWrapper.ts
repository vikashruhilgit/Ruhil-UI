import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

import { GridItemModel } from '@vaadin/grid';
import '@vaadin/menu-bar/theme/material/vaadin-menu-bar.js';

import { styles } from './TableMenuWrapper.css';
import { eventObj } from '../../../utility/util';

export class TableMenuWrapper extends LitElement {
  @property({ type: Object }) model?: GridItemModel<any>;

  @property({ type: Array }) actionItems?: string[];

  @state() items: any;

  static styles = styles;

  private itemClicked = (e: CustomEvent) => {
    const eventData = { ...e.detail, ...this.model?.item };
    this.dispatchEvent(eventObj('ft:table-action-clicked', eventData));
  };

  connectedCallback(): void {
    super.connectedCallback();
    if (this.actionItems) {
      const actionChildren = this.actionItems.map(single => {
        const item: any = {};
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

  private renderIcon = () => {
    const item = document.createElement('vaadin-context-menu-item');
    const icon = document.createElement('ft-icon');
    icon.innerHTML = 'more_horiz';
    item.appendChild(icon);
    return item;
  };

  render = () =>
    html`
      <div class="action-table">
        <vaadin-menu-bar
          theme="tertiary-inline"
          .items="${this.items}"
          @item-selected="${this.itemClicked}"
        ></vaadin-menu-bar>
      </div>
    `;
}
