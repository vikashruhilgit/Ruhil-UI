/* eslint-disable max-classes-per-file */
import { Tab } from '@material/mwc-tab';
import { TabBar } from '@material/mwc-tab-bar/';

import { css } from 'lit';

export class MyTab extends Tab {
  static styles = [
    ...Tab.styles,
    css`
      .mdc-tab--active .mdc-tab__text-label {
        color: var(--ru-tab-active-label-color, var(--mdc-theme-primary));
      }
    `,
  ];
}
export class MyTabBar extends TabBar {}
