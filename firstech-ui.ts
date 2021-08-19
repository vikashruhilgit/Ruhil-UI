import { prefix } from './config';

import { App } from './src/component/App';
import { Test } from './src/component/Test';
import { GooglePay } from './src/component/gpay/GooglePay';
import { PlayGround } from './src/Play-ground';
import { Loader } from './src/component/loader/Loader';

window.customElements.define(`${prefix}-test`, Test);
window.customElements.define(`${prefix}-app`, App);
window.customElements.define(`${prefix}-google-pay`, GooglePay);
window.customElements.define(`${prefix}-play-ground`, PlayGround);
window.customElements.define(`${prefix}-loader`, Loader);
