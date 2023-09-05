import { TopAppBar } from '@material/mwc-top-app-bar';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'lit';

export class Nav extends TopAppBar {
  static styles = [
    ...TopAppBar.styles,
    css`
      .mdc-top-app-bar__section {
        padding: var(--mdc-top-app-bar-section-padding, 8px 12px);
      }
    `,
  ];
}
