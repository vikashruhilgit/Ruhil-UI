import { Drawer } from '@material/mwc-drawer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'lit';
export class MyDrawer extends Drawer {
}
MyDrawer.styles = [
    ...Drawer.styles,
    css `
      .mdc-drawer {
        border-right-style: var(--ft-drawer-top-border-right-style, solid);
      }
    `,
];
//# sourceMappingURL=Drawer.js.map