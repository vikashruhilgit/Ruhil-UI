import { prefix } from './config.js';

import { App } from './src/component/App.js';
import { Test } from './src/component/Test.js';
import { GooglePay } from './src/component/gpay/GooglePay.js';
import { PlayGround } from './src/Play-ground.js';
import { Loader } from './src/component/loader/Loader.js';

window.customElements.define(`${prefix}-test`, Test);
window.customElements.define(`${prefix}-app`, App);
window.customElements.define(`${prefix}-google-pay`, GooglePay);
window.customElements.define(`${prefix}-play-ground`, PlayGround);
window.customElements.define(`${prefix}-loader`, Loader);
