import { App } from './src/component/App.js';
import { Test } from './src/component/Test.js';
import { GooglePay } from './src/component/gpay/GooglePay.js';
import { PlayGround } from './src/Play-ground.js';
import { Loader } from './src/component/loader/Loader.js';

window.customElements.define('ft-test', Test);
window.customElements.define('ft-app', App);
window.customElements.define('ft-google-pay', GooglePay);
window.customElements.define('ft-play-ground', PlayGround);
window.customElements.define('ft-loader', Loader);
