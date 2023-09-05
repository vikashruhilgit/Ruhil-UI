import { html, LitElement } from 'lit';
import { AxiosInstance } from 'axios';
import { property, state } from 'lit/decorators.js';
// import { UUID } from 'uuid-generator-ts';
import {
  addJsFunction,
  addScript,
  addStylesToHead,
  JSTypes,
} from '../../utility/dynamic-script-loader';
import { ePaymentstyles } from './ePayment.css';

interface TsysConfig {
  deviceID: number;
  manifest: string;
}
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
  // #region Component Properties & State
  // These are left commented out on purpose. If needed, please uncomment them
  // for testing the payment service.
  // transactionAmount: number = 5.5;

  @property({ type: String }) serviceUrl: string =
    'http://localhost:5000/tsys-config';

  @property({ type: String }) tsysHostUrl: string =
    'https://stagegw.transnox.com/transit-tsep-web/jsView/';

  @property({ type: String }) nameLabel: string = 'Name on Card';

  @property({ type: String }) cardNumberLabel: string = 'Card Number';

  @property({ type: String }) expiryLabel: string = 'MM/YYYY';

  @property({ type: String }) zipLabel: string = 'Zip Code';

  // @property({ type: String }) email: string = 'jilna.nt@busey.com';

  // @property({ type: String }) adressLine: string = 'Chicago, USA';

  // @property({ type: String }) cardDataSource: string = 'INTERNET';

  @state() loading = true;

  // #endregion
  readonly paymentServiceUrl = 'http://localhost:5000/cardservice';

  private tsysConfigData: TsysConfig | null = null;

  // private uuid = new UUID();

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('TSYSTokenEvent', (e: any) => {
      // this._savePaymentDetails(e);
      const payload = {
        ...e.detail,
        testManifest: this.tsysConfigData?.manifest,
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

  private _formValidation = (event: any, status: string) => {
    if (status === 'SUCCESS') {
      document.getElementById(`error_${event.detail.fieldName}`)?.remove();
    } else {
      const input = document.getElementById(event.detail.fieldName);
      if (!document.getElementById(`error_${event.detail.fieldName}`)) {
        const span = document.createElement('span');
        span.innerText = event.detail.message;
        span.id = `error_${event.detail.fieldName}`;
        input?.parentNode?.insertBefore(span, input.nextSibling);
      } else {
        const span = document.getElementById(`error_${event.detail.fieldName}`);
        span!.innerText = event.detail.message;
      }
    }
  };

  getTsysConfig(axiosObject: AxiosInstance, mId: string) {
    if (axiosObject) {
      axiosObject(this.serviceUrl, {
        method: 'GET',
        params: {
          merchantId: mId,
        },
      })
        .then((res: any) => {
          this.tsysConfigData = res.data;
          this._constructScriptTag();
          addJsFunction(JSTypes.EPAYMENT);
          this.loading = false;
          addStylesToHead(ePaymentstyles);
        })
        .catch((e: any) => {
          // eslint-disable-next-line no-console
          console.warn('Failed to get config with error', e);
        });
    }
  }

  private _constructScriptTag() {
    if (!this.tsysConfigData?.deviceID || !this.tsysConfigData?.manifest) {
      // eslint-disable-next-line no-console
      console.warn('Cannot load script, data missing');
      return;
    }
    const src = `${this.tsysHostUrl}${this.tsysConfigData?.deviceID}?${this.tsysConfigData?.manifest}`;
    addScript({
      src,
      async: false,
      referrerPolicy: 'strict-origin-when-cross-origin',
    });
  }
  // #endregion

  render() {
    return html`
      ${!this.loading
        ? html` <form method="POST" id="payment-form">
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
