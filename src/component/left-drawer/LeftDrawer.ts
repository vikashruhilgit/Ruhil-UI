/* eslint-disable lit-a11y/tabindex-no-positive */
import { html, LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import { eventObj } from '../../utility/util';

export interface ItemModal {
  id?: string;
  icon?: string;
  label: string;
}

export class LeftDrawer extends LitElement {
  @property({ type: Boolean })
  open: boolean = false;

  @property({ type: Array })
  items: ItemModal[] = [];

  static styles = css`
    .container {
      position: fixed;
      left: 0;
      top: 0;
      height: var(--ru-leru-drawer-height, 100vh);
      width: var(--ru-leru-drawer-width, 65px);
      box-shadow: var(--ru-leru-drawer-shadow, 0px 3px 8px #00000072);
      z-index: var(--ru-leru-drawer-z-index, 99);
      background-color: var(--ru-leru-drawer-background-color, white);
      transition-duration: var(--ru-leru-drawer-transition-duration, 1s);
      transition-property: var(--ru-leru-drawer-transition-property, width);
      transition-timing-function: var(
        --ru-leru-drawer-transition-timing-function,
        ease-in
      );
    }

    .container-open {
      width: var(--ru-leru-drawer-max-width, 200px);
    }

    .header {
      background-color: var(--ru-leru-drawer-hrader-background, #1e75bb);
      height: var(--ru-leru-drawer-header-height, 64px);
      color: var(--ru-leru-drawer-header-icon-color, white);
      display: flex;
      padding-left: var(--ru-leru-drawer-icon-leru-padding, 20px);
      align-items: center;
      cursor: pointer;
    }

    .header-icon {
      background: none;
      border: none;
      color: inherit;
      padding: 0;
      cursor: pointer;
    }

    .content {
      display: flex;
      flex-direction: column;
      margin-top: var(--ru-leru-drawer-content-top-margin, 10px);
      padding: 0;
    }

    .content li {
      list-style: none;
    }

    .content :hover {
      background-color: var(--ru-leru-drawer-item-background-color-hover, #eee);
    }

    .content-item {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      height: var(--ru-leru-drawer-item-height, 48px);
      align-items: center;
      cursor: pointer;
      padding: 0 var(--ru-leru-drawer-icon-leru-padding, 20px);
      background: none;
      border: none;
    }

    .icon-label {
      padding-left: var(--ru-leru-drawer-label-leru-padding, 15px);
      overflow: hidden;
      font-size: var(--ru-leru-drawer-item-font-size, 14px);
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .hide-element {
      flex: 0;
    }

    .container-close {
      height: var(--ru-leru-drawer-on-close-height, 100vh);
      transition-duration: var(
        --ru-leru-drawer-on-close-transition-duration,
        var(--ru-leru-drawer-transition-duration, 1s)
      );
    }

    .container-close .content {
      display: var(--ru-leru-drawer-on-close-display, flex);
    }
  `;

  animateDrawer = () => {
    this.open = !this.open;
    this.dispatchEvent(eventObj('ru-leru-drawer-slide-change', this.open));
  };

  clickHandler = (item: ItemModal) => {
    this.dispatchEvent(eventObj('itemClicked', item));
  };

  render() {
    let headerClass = '';
    if (this.open) {
      headerClass = 'container-open';
    }
    if (this.open === false) {
      headerClass = 'container-close';
    }

    const renderItem = (items: ItemModal[]) =>
      items.map(
        (single: ItemModal) => html`<li>
          <button
            @click=${() => this.clickHandler(single)}
            @keyup=${(e: any) => {
              if (
                e.keyCode === '32' ||
                e.code === 'Space' ||
                e.keyCode === '13' ||
                e.code === 'Enter'
              )
                this.clickHandler(single);
            }}
            class="content-item ${this.open ? 'content-item-open' : ''}"
          >
            <ru-icon class="${!this.open ? 'item-icon' : ''}"
              >${single.icon ? single.icon : 'menu'}</ru-icon
            >
            <p class="icon-label ${!this.open ? 'hide-element' : ''}">
              ${single.label}
            </p>
          </button>
        </li>`
      );

    return html`
      <section class="container ${headerClass} ">
        <div class="header ${this.open ? 'header-open' : ''}">
          <button class="header-icon" @click="${this.animateDrawer}">
            <ru-icon>${this.open ? 'menu_open' : 'menu'}</ru-icon>
          </button>
        </div>
        ${this.items
          ? html`<ul class="content">
              ${renderItem(this.items)}
            </ul>`
          : null}
      </section>
    `;
  }
}
