import { LitElement, html, css } from 'lit-element';
import 'weightless/button';
import 'weightless/divider';
import 'weightless/title';
import '@material/mwc-button';

export class PlayGround extends LitElement {
  printLog = (t: any) => {
    console.log(t);
  };

  transactionData = {
    displayItems: [
      {
        label: 'Subtotal',
        type: 'SUBTOTAL',
        price: '1.00',
      },
      {
        label: 'Tax',
        type: 'TAX',
        price: '0.00',
      },
    ],
    countryCode: 'IN',
    currencyCode: 'INR',
    totalPriceStatus: 'FINAL',
    totalPrice: '1.00',
    totalPriceLabel: 'Total',
  };

  render() {
    return html`<div>
      <!--
          This is to play with newly created component
       -->
      <wl-title level="4">Your Custom component</wl-title>
      <wl-divider></wl-divider>
      <!-- <ft-google-pay
        @payment-processed=${this.printLog}
        @error=${this.printLog}
        .clientId=${'#hgvk86bvghhjbhGYvbjVH*75%Uyhfvbj98'}
        .transactionData=${null}
      ></ft-google-pay> -->

      <wl-title level="4">
        Componemt inherit from - 'weightless' Component Library</wl-title
      >
      <wl-divider></wl-divider>
      <wl-button>Button</wl-button>

      <wl-title level="4"
        >Componemt inherit from - 'Metrial' Web Component Library</wl-title
      >

      <mwc-button id="myButton" label="Click Me!" raised></mwc-button>

      <ft-loader .count=${'2'}></ft-loader>
    </div> `;
  }
}
