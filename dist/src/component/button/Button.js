import { Button } from '@material/mwc-button';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'lit';
export class MyButton extends Button {
}
MyButton.styles = [
    ...Button.styles,
    css `
      #button.mdc-button {
        height: var(--mdc-button-custom-height, 36px);
        width: var(--mdc-button-custom-width, auto);
      }
    `,
];
//# sourceMappingURL=Button.js.map