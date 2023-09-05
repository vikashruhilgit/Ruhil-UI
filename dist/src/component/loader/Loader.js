import { __decorate } from "tslib";
import { html, LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
export class Loader extends LitElement {
    constructor() {
        super(...arguments);
        this.count = '1';
        this.classes = [];
        this.styleOverrides = {};
    }
    renderLoaderItems(items) {
        return items.map(() => html ` <span
        class=${`cb-loader ${this.classes.join(' ')}`}
        style=${styleMap(this.styleOverrides)}
      ></span>`);
    }
    render() {
        const items = new Array(parseInt(this.count, 10)).fill('');
        return html ` ${this.renderLoaderItems(items)} `;
    }
}
Loader.styles = css `
    .cb-loader {
      box-sizing: border-box;
      /**
      * overflow and position are required steps to make sure
      * the component respects the specified dimensions
      * given via theme object @Input attribute
      */
      overflow: hidden;
      position: relative;

      animation: progress 2s ease-in-out infinite;
      background: rgb(239, 241, 246) no-repeat;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0)
      );
      background-size: 200px 100%;
      border-radius: 5px;
      width: 100%;
      height: 10px;
      display: inline-block;
      margin-bottom: 10px;
    }
    .cb-loader:after,
    .cb-loader:before {
      box-sizing: border-box;
    }

    .cb-loader.square {
      width: 40px;
      height: 40px;
      margin: 10px;
    }

    .cb-loader.circle {
      width: 40px;
      height: 40px;
      margin: 10px;
      border-radius: 50%;
    }
    .cb-loader.circle.small {
      width: 25px;
      height: 25px;
    }
    .cb-loader.square.small {
      width: 25px;
      height: 25px;
    }

    @keyframes progress {
      0% {
        background-position: -200px 0;
      }

      100% {
        background-position: calc(200px + 100%) 0;
      }
    }
  `;
__decorate([
    property({ type: String })
], Loader.prototype, "count", void 0);
__decorate([
    property({ type: Array })
], Loader.prototype, "classes", void 0);
__decorate([
    property({ type: Object })
], Loader.prototype, "styleOverrides", void 0);
//# sourceMappingURL=Loader.js.map