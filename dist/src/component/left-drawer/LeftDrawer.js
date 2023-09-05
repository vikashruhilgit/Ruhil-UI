import { __decorate } from "tslib";
/* eslint-disable lit-a11y/tabindex-no-positive */
import { html, LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import { eventObj } from '../../utility/util';
export class LeftDrawer extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
        this.items = [];
        this.animateDrawer = () => {
            this.open = !this.open;
            this.dispatchEvent(eventObj('ft-left-drawer-slide-change', this.open));
        };
        this.clickHandler = (item) => {
            this.dispatchEvent(eventObj('itemClicked', item));
        };
    }
    render() {
        let headerClass = '';
        if (this.open) {
            headerClass = 'container-open';
        }
        if (this.open === false) {
            headerClass = 'container-close';
        }
        const renderItem = (items) => items.map((single) => html `<li>
          <button
            @click=${() => this.clickHandler(single)}
            @keyup=${(e) => {
            if (e.keyCode === '32' ||
                e.code === 'Space' ||
                e.keyCode === '13' ||
                e.code === 'Enter')
                this.clickHandler(single);
        }}
            class="content-item ${this.open ? 'content-item-open' : ''}"
          >
            <ft-icon class="${!this.open ? 'item-icon' : ''}"
              >${single.icon ? single.icon : 'menu'}</ft-icon
            >
            <p class="icon-label ${!this.open ? 'hide-element' : ''}">
              ${single.label}
            </p>
          </button>
        </li>`);
        return html `
      <section class="container ${headerClass} ">
        <div class="header ${this.open ? 'header-open' : ''}">
          <button class="header-icon" @click="${this.animateDrawer}">
            <ft-icon>${this.open ? 'menu_open' : 'menu'}</ft-icon>
          </button>
        </div>
        ${this.items
            ? html `<ul class="content">
              ${renderItem(this.items)}
            </ul>`
            : null}
      </section>
    `;
    }
}
LeftDrawer.styles = css `
    .container {
      position: fixed;
      left: 0;
      top: 0;
      height: var(--ft-left-drawer-height, 100vh);
      width: var(--ft-left-drawer-width, 65px);
      box-shadow: var(--ft-left-drawer-shadow, 0px 3px 8px #00000072);
      z-index: var(--ft-left-drawer-z-index, 99);
      background-color: var(--ft-left-drawer-background-color, white);
      transition-duration: var(--ft-left-drawer-transition-duration, 1s);
      transition-property: var(--ft-left-drawer-transition-property, width);
      transition-timing-function: var(
        --ft-left-drawer-transition-timing-function,
        ease-in
      );
    }

    .container-open {
      width: var(--ft-left-drawer-max-width, 200px);
    }

    .header {
      background-color: var(--ft-left-drawer-hrader-background, #1e75bb);
      height: var(--ft-left-drawer-header-height, 64px);
      color: var(--ft-left-drawer-header-icon-color, white);
      display: flex;
      padding-left: var(--ft-left-drawer-icon-left-padding, 20px);
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
      margin-top: var(--ft-left-drawer-content-top-margin, 10px);
      padding: 0;
    }

    .content li {
      list-style: none;
    }

    .content :hover {
      background-color: var(--ft-left-drawer-item-background-color-hover, #eee);
    }

    .content-item {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      height: var(--ft-left-drawer-item-height, 48px);
      align-items: center;
      cursor: pointer;
      padding: 0 var(--ft-left-drawer-icon-left-padding, 20px);
      background: none;
      border: none;
    }

    .icon-label {
      padding-left: var(--ft-left-drawer-label-left-padding, 15px);
      overflow: hidden;
      font-size: var(--ft-left-drawer-item-font-size, 14px);
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .hide-element {
      flex: 0;
    }

    .container-close {
      height: var(--ft-left-drawer-on-close-height, 100vh);
      transition-duration: var(
        --ft-left-drawer-on-close-transition-duration,
        var(--ft-left-drawer-transition-duration, 1s)
      );
    }

    .container-close .content {
      display: var(--ft-left-drawer-on-close-display, flex);
    }
  `;
__decorate([
    property({ type: Boolean })
], LeftDrawer.prototype, "open", void 0);
__decorate([
    property({ type: Array })
], LeftDrawer.prototype, "items", void 0);
//# sourceMappingURL=LeftDrawer.js.map