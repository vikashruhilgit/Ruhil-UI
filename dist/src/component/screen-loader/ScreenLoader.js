import { __decorate } from "tslib";
import { html, LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
export class ScreenLoader extends LitElement {
    constructor() {
        super(...arguments);
        this.count = '1';
        this.classes = [];
        this.styleOverrides = {};
    }
    render() {
        return html `
      <ru-dialog scrimClickAction="" class="wrapper" hideActions open>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ru-dialog>
    `;
    }
}
ScreenLoader.styles = css `
    .wrapper {
      --mdc-theme-surface: transparent;
      --mdc-dialog-box-shadow: none;
      --mdc-dialog-min-width: 80px;
    }
    .mdc-dialog__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 50px;
      height: 50px;
      margin: 5px;
      border: 5px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
__decorate([
    property({ type: String })
], ScreenLoader.prototype, "count", void 0);
__decorate([
    property({ type: Array })
], ScreenLoader.prototype, "classes", void 0);
__decorate([
    property({ type: Object })
], ScreenLoader.prototype, "styleOverrides", void 0);
//# sourceMappingURL=ScreenLoader.js.map