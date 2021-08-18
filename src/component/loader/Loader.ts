import { html, LitElement, property, css, state } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

export class Loader extends LitElement {
  @property({ type: String }) count = '1';

  @property({ type: Array }) classes = [];

  @property({ type: Object }) styleOverrides: { [k: string]: any } = {};

  static styles = css`
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

    .cb-loader.square-small {
      width: 50px;
      height: 50px;
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

    @keyframes progress {
      0% {
        background-position: -200px 0;
      }

      100% {
        background-position: calc(200px + 100%) 0;
      }
    }
  `;

  @state() items: string[] = [];

  firstUpdated() {
    this.items = new Array(parseInt(this.count, 10)).fill('');
  }

  renderLoaderItems(items: string[]) {
    return items.map(
      () => html` <span
        class=${`cb-loader ${this.classes.join(' ')}`}
        style=${styleMap(this.styleOverrides)}
      ></span>`
    );
  }

  render() {
    return html` ${this.renderLoaderItems(this.items)} `;
  }
}
