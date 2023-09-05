import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { addJsFunction, addScript, JSTypes, } from '../../utility/dynamic-script-loader';
import { styles } from './ePayment.css';
// These are left commented out on purpose. If needed, please uncomment them
// for testing the payment service.
/* interface Payment {
  cardDataSource?: string;
  transactionAmount: number;
  currencyCode?: string;
  cardType: string;
  cardNumber: string;
  lastFour: string;
  expirationDate: string;
  cvv2: number;
  cardHolderName: string;
  addressLine1?: string;
  zip: string;
  cardOnFile?: string;
  tokenRequired?: string;
  email?: string;
  manifest?: string;
  transactionId: string;
} */
export class EPayment extends LitElement {
    constructor() {
        // #region Component Properties & State
        // These are left commented out on purpose. If needed, please uncomment them
        // for testing the payment service.
        // transactionAmount: number = 5.5;
        super(...arguments);
        this.serviceUrl = 'http://localhost:5000/tsys-config';
        this.tsysHostUrl = 'https://stagegw.transnox.com/transit-tsep-web/jsView/';
        this.nameLabel = 'Name on Card';
        this.cardNumberLabel = 'Card Number';
        this.expiryLabel = 'MM/YYYY';
        this.zipLabel = 'Zip Code';
        // @property({ type: String }) email: string = 'jilna.nt@busey.com';
        // @property({ type: String }) adressLine: string = 'Chicago, USA';
        // @property({ type: String }) cardDataSource: string = 'INTERNET';
        this.loading = true;
        // #endregion
        this.paymentServiceUrl = 'http://localhost:5000/cardservice';
        this.tsysConfigData = null;
        // #region Private Functions
        // These are left commented out on purpose. If needed, please uncomment them
        // for testing the payment service.
        /*     private _savePaymentDetails = (event: any) => {
          if (event.detail) {
            const uuidValue = this.uuid.getDashFreeUUID();
            const data = event.detail;
            const payload: Payment = {
              transactionAmount: this.transactionAmount,
              cardType: data.cardType,
              cardNumber: data.tsepToken,
              lastFour: data.maskedCardNumber,
              expirationDate: data.expirationDate?.replace(/\//g, ''),
              cvv2: data.cvv2 != " undefined"? data.cvv2 : undefined,
              cardHolderName: data.cardHolderName,
              zip: data.zipCode,
              manifest: data.tsepToken ? undefined : this.tsysConfigData?.manifest,
              email: this.email,
              addressLine1: this.adressLine,
              cardDataSource: this.cardDataSource,
              transactionId: uuidValue.substring(uuidValue.length - 7)
            };
            postRequest(this.paymentServiceUrl, payload)
              .then(() => {})
              .catch((e: any) => {
                // eslint-disable-next-line no-console
                console.warn('FAILED TO MAKE PAYMENT', e);
              });
          }
        }; */
        this._formValidation = (event, status) => {
            var _a, _b;
            if (status === 'SUCCESS') {
                (_a = document.getElementById(`error_${event.detail.fieldName}`)) === null || _a === void 0 ? void 0 : _a.remove();
            }
            else {
                const input = document.getElementById(event.detail.fieldName);
                if (!document.getElementById(`error_${event.detail.fieldName}`)) {
                    const span = document.createElement('span');
                    span.innerText = event.detail.message;
                    span.id = `error_${event.detail.fieldName}`;
                    (_b = input === null || input === void 0 ? void 0 : input.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(span, input.nextSibling);
                }
                else {
                    const span = document.getElementById(`error_${event.detail.fieldName}`);
                    span.innerText = event.detail.message;
                }
            }
        };
    }
    // private uuid = new UUID();
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('TSYSTokenEvent', (e) => {
            var _a;
            // this._savePaymentDetails(e);
            const payload = {
                ...e.detail,
                testManifest: (_a = this.tsysConfigData) === null || _a === void 0 ? void 0 : _a.manifest,
            };
            const raiseEvent = new CustomEvent('TSYSCardValidationEvent', {
                detail: payload,
                bubbles: true,
                composed: true,
            });
            document.dispatchEvent(raiseEvent);
        });
        document.addEventListener('TSYSFieldValidationError', e => {
            this._formValidation(e, 'FAIL');
        });
        document.addEventListener('TSYSFieldValidationSuccess', e => {
            this._formValidation(e, 'SUCCESS');
        });
        const iniatilisedComponet = new CustomEvent('EpaymentInitialised', {
            detail: 'SUCCESS',
            bubbles: true,
            composed: true,
        });
        setTimeout(() => this.dispatchEvent(iniatilisedComponet));
        // this._getTsysConfig();
    }
    disconnectedCallback() {
        document.removeEventListener('TSYSTokenEvent', () => {
            // this._savePaymentDetails(e);
        });
        document.removeEventListener('TSYSFieldValidationError', e => {
            this._formValidation(e, 'FAIL');
        });
        document.removeEventListener('TSYSFieldValidationSuccess', e => {
            this._formValidation(e, 'SUCCESS');
        });
        super.disconnectedCallback();
    }
    /**
     * Disable Shadow root for this component as the TSYS script queries using the element id.
     * @returns
     */
    createRenderRoot() {
        return this;
    }
    getTsysConfig(axiosObject, mId) {
        if (axiosObject) {
            axiosObject(this.serviceUrl, {
                method: 'GET',
                params: {
                    merchantId: mId,
                },
            })
                .then((res) => {
                this.tsysConfigData = res.data;
                this._constructScriptTag();
                addJsFunction(JSTypes.EPAYMENT);
                this.loading = false;
                // addStylesToHead(ePaymentstyles);
            })
                .catch((e) => {
                // eslint-disable-next-line no-console
                console.warn('Failed to get config with error', e);
            });
        }
    }
    _constructScriptTag() {
        var _a, _b, _c, _d;
        if (!((_a = this.tsysConfigData) === null || _a === void 0 ? void 0 : _a.deviceID) || !((_b = this.tsysConfigData) === null || _b === void 0 ? void 0 : _b.manifest)) {
            // eslint-disable-next-line no-console
            console.warn('Cannot load script, data missing');
            return;
        }
        const src = `${this.tsysHostUrl}${(_c = this.tsysConfigData) === null || _c === void 0 ? void 0 : _c.deviceID}?${(_d = this.tsysConfigData) === null || _d === void 0 ? void 0 : _d.manifest}`;
        addScript({
            src,
            async: false,
            referrerPolicy: 'strict-origin-when-cross-origin',
        });
    }
    // #endregion
    render() {
        return html `
      ${!this.loading
            ? html ` <form method="POST" id="payment-form">
            <div id="tsep-cardHolderNameDiv" data-validate-name="Y">
              <label id="tsep-label">${this.nameLabel}</label>
            </div>
            <div
              id="tsep-cardNumDiv"
              data-auto-formatting="Y"
              data-validate-cc="Y"
              data-detect-card-type="Y"
            >
              <label id="tsep-label">${this.cardNumberLabel}</label>
            </div>
            <div id="tsep-datepickerDiv" data-validate-expiry-date="Y">
              <label id="tsep-label">${this.expiryLabel}</label>
            </div>
            <div id="tsep-zipCodeDiv" data-validate-zipcode="Y">
              <label id="tsep-label">${this.zipLabel}</label>
            </div>
          </form>`
            : null}
    `;
    }
}
EPayment.styles = styles;
__decorate([
    property({ type: String })
], EPayment.prototype, "serviceUrl", void 0);
__decorate([
    property({ type: String })
], EPayment.prototype, "tsysHostUrl", void 0);
__decorate([
    property({ type: String })
], EPayment.prototype, "nameLabel", void 0);
__decorate([
    property({ type: String })
], EPayment.prototype, "cardNumberLabel", void 0);
__decorate([
    property({ type: String })
], EPayment.prototype, "expiryLabel", void 0);
__decorate([
    property({ type: String })
], EPayment.prototype, "zipLabel", void 0);
__decorate([
    state()
], EPayment.prototype, "loading", void 0);
//# sourceMappingURL=EPayment.js.map