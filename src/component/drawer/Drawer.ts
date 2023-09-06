import { Drawer } from '@material/mwc-drawer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'lit';

export class MyDrawer extends Drawer {
  static styles = [
    ...Drawer.styles,
    css`
      .mdc-drawer {
        border-right-style: var(--ru-drawer-top-border-right-style, solid);
      }
    `,
  ];
}
