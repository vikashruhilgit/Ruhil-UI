import { Dialog } from '@material/mwc-dialog';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'lit';

export class MySlide extends Dialog {
  static styles = [
    ...Dialog.styles,
    css`
      .mdc-dialog .mdc-dialog__surface {
        height: 100vh;
        max-height: 100vh;
      }
      .mdc-dialog,
      .mdc-dialog__scrim {
        justify-content: left;
      }
      .mdc-dialog__container {
        transform: translate(-100%);
      }

      .mdc-dialog__container {
        animation: pulse 1s ease;
      }

      @keyframes pulse {
        0% {
          transform: translate(-100%);
        }
        100% {
          transform: translate(0%);
        }
      }
    `,
  ];
}
