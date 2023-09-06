import { prefix } from './config';

import {
  App,
  Loader,
  GooglePay,
  Test,
  MyButton,
  MySlide,
  Nav,
  MyIconButton,
  MyDialog,
  MyFab,
  MySnackbar,
  MySlider,
  MyFormfield,
  MyCheckbox,
  MyRadio,
  MySwitch,
  MyIcon,
  MyDrawer,
  MyIconButtonToggle,
  MyList,
  MyListItem,
  MyCheckListItem,
  MyRadioListItem,
  MyMenu,
  MySelect,
  MyTab,
  MyTabBar,
  MyTextField,
  MyTextArea,
  MyLinearProgress,
  MyCircularProgress,
  MyCircularProgressFourColor,
  MyDivider,
  MyExpansion,
  ScreenLoader,
  LeftDrawer,
  DataTable,
  TableMenuWrapper,
  EPayment,
} from './component';
import { PlayGround } from './Play-ground';

window.customElements.define(`${prefix}-test`, Test);
window.customElements.define(`${prefix}-app`, App);
window.customElements.define(`${prefix}-google-pay`, GooglePay);
window.customElements.define(`${prefix}-play-ground`, PlayGround);
window.customElements.define(`${prefix}-loader`, Loader);
window.customElements.define(`${prefix}-button`, MyButton);
window.customElements.define(`${prefix}-slide`, MySlide);
window.customElements.define(`${prefix}-nav`, Nav);
window.customElements.define(`${prefix}-icon-button`, <any>MyIconButton);
window.customElements.define(`${prefix}-dialog`, MyDialog);
window.customElements.define(`${prefix}-fab`, MyFab);
window.customElements.define(`${prefix}-snackbar`, MySnackbar);
window.customElements.define(`${prefix}-slider`, <any>MySlider);
window.customElements.define(`${prefix}-radio`, <any>MyRadio);
window.customElements.define(`${prefix}-checkbox`, <any>MyCheckbox);
window.customElements.define(`${prefix}-formfield`, MyFormfield);
window.customElements.define(`${prefix}-switch`, <any>MySwitch);
window.customElements.define(`${prefix}-icon`, MyIcon);
window.customElements.define(`${prefix}-drawer`, MyDrawer);
window.customElements.define(`${prefix}-list`, MyList);
window.customElements.define(`${prefix}-list-item`, MyListItem);
window.customElements.define(`${prefix}-check-list-item`, MyCheckListItem);
window.customElements.define(`${prefix}-radio-list-item`, MyRadioListItem);
window.customElements.define(`${prefix}-menu`, MyMenu);
window.customElements.define(`${prefix}-select`, MySelect);
window.customElements.define(`${prefix}-tab`, MyTab);
window.customElements.define(`${prefix}-tab-bar`, MyTabBar);
window.customElements.define(`${prefix}-textfield`, MyTextField);
window.customElements.define(`${prefix}-textarea`, MyTextArea);
window.customElements.define(`${prefix}-screen-loader`, ScreenLoader);
window.customElements.define(`${prefix}-left-drawer`, LeftDrawer);
window.customElements.define(`${prefix}-table-menu-wrapper`, TableMenuWrapper);
window.customElements.define(
  `${prefix}-linear-progress`,
  <any>MyLinearProgress
);
window.customElements.define(
  `${prefix}-circular-progress`,
  <any>MyCircularProgress
);
window.customElements.define(`${prefix}-divider`, MyDivider);
window.customElements.define(`${prefix}-expansion`, MyExpansion);
window.customElements.define(`${prefix}-table`, DataTable);
window.customElements.define(
  `${prefix}-circular-progress-four-color`,
  <any>MyCircularProgressFourColor
);
window.customElements.define(
  `${prefix}-icon-button-toggle`,
  <any>MyIconButtonToggle
);
window.customElements.define(`${prefix}-e-payment`, EPayment);

/* For React to understand the Web-Compoent within JSX */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ft-test': any;
      'ft-app': any;
      'ft-google-pay': any;
      'ft-play-ground': any;
      'ft-loader': any;
      'ft-button': any;
      'ft-slide': any;
      'ft-nav': any;
      'ft-icon-button': any;
      'ft-dialog': any;
      'ft-fab': any;
      'ft-snackbar': any;
      'ft-slider': any;
      'ft-radio': any;
      'ft-checkbox': any;
      'ft-formfield': any;
      'ft-switch': any;
      'ft-icon': any;
      'ft-drawer': any;
      'ft-list': any;
      'ft-list-item': any;
      'ft-check-list-item': any;
      'ft-radio-list-item': any;
      'ft-menu': any;
      'ft-select': any;
      'ft-tab': any;
      'ft-tab-bar': any;
      'ft-textfield': any;
      'ft-textarea': any;
      'ft-linear-progress': any;
      'ft-circular-progress': any;
      'ft-divider': any;
      'ft-expansion': any;
      'ft-circular-progress-four-color': any;
      'ft-icon-button-toggle': any;
      'ft-screen-loader': any;
      'ft-left-drawer': any;
      'ft-table': any;
      'ft-table-menu-wrapper': any;
      'ft-e-payment': any;
    }
  }
}
