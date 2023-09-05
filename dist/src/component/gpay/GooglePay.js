import { __decorate } from "tslib";
/* eslint-disable no-console */
import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { eventObj } from '../../utility/util';
import { styles } from './googlePay.css';
const initialConfig = {
    publicKey: '',
    customerkey: '',
    environment: 'TEST',
    buttonColor: 'black',
    buttonLocale: 'en',
    type: 'AUTH',
};
export class GooglePay extends LitElement {
    constructor() {
        super(...arguments);
        this._error = {
            status: false,
            msg: '',
        };
        this._config = initialConfig;
        this._transactionData = null;
        this._paymentsClient = null;
        this._onPaymentAuthorized = () => new Promise(resolve => {
            resolve({
                transactionState: 'SUCCESS',
            });
        });
        /**
         * Define the version of the Google Pay API referenced when creating your
         * configuration
         *
         * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataRequest|apiVersion in PaymentDataRequest}
         */
        this._baseRequest = {
            apiVersion: 2,
            apiVersionMinor: 0,
        };
        /**
         * Card networks supported by your site and your gateway
         *
         * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
         * @todo confirm card networks supported by your site and gateway
         */
        this._allowedCardNetworks = ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA'];
        /**
         * Card authentication methods supported by your site and your gateway
         *
         * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
         * @todo confirm your processor supports Android device tokens for your
         * supported card networks
         */
        this._allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];
        /**
         * Identify your gateway and your site's gateway merchant identifier
         *
         * The Google Pay API response will return an encrypted payment method capable
         * of being charged by a supported gateway after payer authorization
         *
         * @todo check with your gateway on the parameters to pass
         * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway|PaymentMethodTokenizationSpecification}
         */
        this._tokenizationSpecification = {
            type: 'DIRECT',
            parameters: {
                protocolVersion: 'ECv2',
                publicKey: '',
            },
        };
        /* _tokenizationSpecification = {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'globalpayments',
            gatewayMerchantId: '888000103376',
          },
        };
       */
        /**
         * Describe your site's support for the CARD payment method and its required
         * fields
         *
         * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
         */
        this._baseCardPaymentMethod = {
            type: 'CARD',
            parameters: {
                allowedAuthMethods: this._allowedCardAuthMethods,
                allowedCardNetworks: this._allowedCardNetworks,
            },
        };
        /**
         * Describe your site's support for the CARD payment method including optional
         * fields
         *
         * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
         */
        this._cardPaymentMethod = {
            ...this._baseCardPaymentMethod,
            tokenizationSpecification: this._tokenizationSpecification,
        };
        this.renderGpay = (config, transactionData, paymentCallback) => {
            this._config = {
                ...config,
            };
            this._transactionData = transactionData;
            this._onPaymentAuthorized = paymentCallback;
            this._getClientInfo(this._config);
        };
        this._checkAndLoadGooglePayButton = () => {
            if (window.google &&
                window.google.payments &&
                window.google.payments.api &&
                window.google.payments.api.PaymentsClient) {
                this._onGooglePayLoaded();
            }
            else {
                const scriptElement = document.createElement('script');
                scriptElement.type = 'text/javascript';
                scriptElement.src = 'https://pay.google.com/gp/p/js/pay.js';
                document.head.appendChild(scriptElement);
                scriptElement.onload = this._onGooglePayLoaded;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._getClientInfo = (config) => {
            this._setClientData(config);
            this._checkAndLoadGooglePayButton();
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._setClientData = (config) => {
            // console.log(clientInfo);
            this._tokenizationSpecification.parameters.publicKey = config.publicKey;
        };
        this._onGooglePayLoaded = () => {
            const _paymentsClient = this._getGooglePaymentsClient();
            _paymentsClient
                .isReadyToPay(this._getGoogleIsReadyToPayRequest())
                .then((response) => {
                if (response.result) {
                    this._addGooglePayButton();
                    // @todo prefetch payment data to improve performance after confirming site functionality
                    // prefetchGooglePaymentData();
                }
            })
                .catch((err) => {
                // show error in developer console for debugging
                console.error(err);
            });
        };
        this._getGoogleIsReadyToPayRequest = () => ({
            ...this._baseRequest,
            allowedPaymentMethods: [this._baseCardPaymentMethod],
        });
        // use this for gettingthis out of the shodow root.
        /* createRenderRoot() {
          return this;
        } */
        /* _registredMerchantInfo = {
          merchantName: 'Example Merchant',
          merchantId: '01234567890123456789',
        }; */
        this._googleMerchantInfo = {
            // @todo a merchant ID is available for a production environment after approval by Google
            // See {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
            merchantId: '01234567890123456789',
            merchantName: '',
        };
        // eslint-disable-next-line arrow-body-style
        this._getRegistredMerchantInfo = (merchantName) => {
            return { ...this._googleMerchantInfo, merchantName };
        };
        this._getGooglePaymentsClient = () => {
            if (this._paymentsClient === null) {
                let paymentDataCallbacks = null;
                if (this._config.type === 'PAYMENT') {
                    paymentDataCallbacks = {
                        onPaymentAuthorized: this._onPaymentAuthorized,
                        // onPaymentDataChanged: onPaymentDataChanged,
                    };
                }
                this._paymentsClient = new window.google.payments.api.PaymentsClient({
                    environment: this._config.environment,
                    merchantInfo: this._getRegistredMerchantInfo(this._config.customerkey),
                    paymentDataCallbacks,
                });
            }
            return this._paymentsClient;
        };
        this._addGooglePayButton = () => {
            var _a;
            const paymentsClient = this._getGooglePaymentsClient();
            const button = paymentsClient.createButton({
                onClick: this._onGooglePaymentButtonClicked,
                buttonColor: this._config.buttonColor,
                buttonLocale: this._config.buttonLocale,
            });
            const el = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('google-pay');
            if (el) {
                el.appendChild(button);
            }
        };
        this._onGooglePaymentButtonClicked = () => {
            const paymentDataRequest = this._getGooglePaymentDataRequest();
            paymentDataRequest.transactionInfo = this._transactionData;
            const paymentsClient = this._getGooglePaymentsClient();
            paymentsClient
                .loadPaymentData(paymentDataRequest)
                .then((paymentData) => {
                this.dispatchEvent(eventObj('gpay-success', paymentData));
            })
                .catch((err) => {
                this._errorHandler({
                    status: true,
                    msg: 'refer detail error',
                    detailError: err,
                });
            });
        };
        this._getGooglePaymentDataRequest = () => {
            const paymentDataRequest = { ...this._baseRequest };
            paymentDataRequest.allowedPaymentMethods = [this._cardPaymentMethod];
            paymentDataRequest.transactionInfo = this._transactionData;
            paymentDataRequest.merchantInfo = this._getRegistredMerchantInfo(this._config.customerkey);
            if (this._config.type === 'PAYMENT') {
                paymentDataRequest.callbackIntents = ['PAYMENT_AUTHORIZATION'];
            }
            return paymentDataRequest;
        };
        this._errorHandler = (err) => {
            this._error = {
                ...err,
            };
            this.dispatchEvent(eventObj('gpay-error', err));
        };
        this._refreshButton = () => {
            var _a;
            this._error = {
                status: false,
                msg: '',
            };
            const el = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('google-pay');
            if (el) {
                el.innerHTML = '';
                this._paymentsClient = null;
                this._onGooglePayLoaded();
            }
        };
        this.errorMsg = html `<span
    >Something went wrong. Try again.<span
      @click="${this._refreshButton}"
      @keyup="${this._refreshButton}"
      >Refresh</span
    ></span
  > `;
        this.render = () => html `
    <div id="google-pay"></div>
    ${this._error.status ? null : null}
  `;
    }
}
GooglePay.styles = styles;
__decorate([
    state()
], GooglePay.prototype, "_error", void 0);
//# sourceMappingURL=GooglePay.js.map