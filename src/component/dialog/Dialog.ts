import { Dialog } from '@material/mwc-dialog';
import { css } from 'lit';

export class MyDialog extends Dialog {
  static styles = [
    ...Dialog.styles,
    css`
      #title.mdc-dialog__title {
        visibility: hidden;
        height: 0;
      }
      .mdc-dialog__content {
        overflow: var(--mdc-dialog__content-overflow, 'auto');
      }
      .mdc-dialog__surface {
        overflow: var(--mdc-dialog__surface-overflow, 'auto');
      }
    `,
  ];
}
