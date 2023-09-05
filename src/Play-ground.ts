import { LitElement, html } from 'lit';
import 'weightless/button';
import 'weightless/divider';
import 'weightless/title';
import '@material/mwc-button';
// import { ItemModal } from './component';

export class PlayGround extends LitElement {
  printLog = (t: any) => {
    // eslint-disable-next-line no-console
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
  /*
  items: ItemModal[] = [
    { id: '0', icon: 'summarize', label: 'Summarize' },
    { id: '1', icon: 'menu_book', label: 'Menu Book' },
    { id: '2', icon: 'lunch_dining', label: 'Lunch Dining' },
    { id: '3', icon: 'agriculture', label: 'Agriculture' },
    { id: '4', icon: 'ev_station', label: 'EV Station' },
  ];

  abc = [
    {
      id: '0',
      paymentDate: '07/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
      ShareOrDownload: '',
      acition: '',
    },
    {
      id: '0',
      paymentDate: '08/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
      ShareOrDownload: '',
      acition: '',
    },
    {
      id: '0',
      paymentDate: '09/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
      ShareOrDownload: '',
      acition: '',
    },
    {
      id: '0',
      paymentDate: '10/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
      ShareOrDownload: '',
      acition: '',
    },
    {
      id: '0',
      paymentDate: '11/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
      ShareOrDownload: '',
      acition: '',
    },
    {
      id: '0',
      paymentDate: '12/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
      ShareOrDownload: '',
      acition: '',
    },
    {
      id: '0',
      paymentDate: '13/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
      ShareOrDownload: '',
      acition: '',
    },
    {
      id: '0',
      paymentDate: '14/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
      ShareOrDownload: '',
      acition: '',
    },
    {
      id: '0',
      paymentDate: '15/23/2021',
      paymentMethod: 'Apple Pay',
      amountPaid: '$120.80',
      status: 'Pending',
      amountDue: '$120.80',
      confirmation: '1234567890',
    },
  ];

  actionItems = ['edit', 'Delete'];

  headerObj = [
    { id: 'paymentDate', label: '', alwaysShow: true },
    { id: 'paymentMethod', label: '' },
    { id: 'amountPaid', label: '', alwaysShow: true },
    { id: 'status', label: '' },
    { id: 'amountDue', label: '' },
    { id: 'confirmation', label: '' },
    { id: '', label: 'Share or Download', type: 'SHARE-DOWMLOAD' },
    { id: '', label: 'Action', type: 'ACTION' },
  ]; */

  render() {
    return html`<div>
      <ft-google-pay
        @gpay-success=${this.printLog}
        @gpay-error=${this.printLog}
        .transactionData=${this.transactionData}
        .config=${{
          customerkey: 'Busey',
          publicKey:
            'BNpvYANJS6oqUtOVokdm5pzJDGnQred/k66TUdlQs+lsZriZLIFxZZAFuIvoSefLgSZCvxhgn/sOP5Q10jUfip8=',
        }}
      ></ft-google-pay>
      <!--
          This is to play with newly created component
       -->
      <!-- <wl-title level="4">weightless title component</wl-title>
      <wl-divider></wl-divider>
      <wl-button>Button</wl-button>

      <wl-title level="4"
        >Componemt inherit from - 'Metrial' Web Component Library</wl-title
      >

      <mwc-button id="myButton" label="Click Me!" raised></mwc-button>
      <wl-divider></wl-divider>
      <wl-title level="4">Firstech Component</wl-title> -->
      <!--  -->

      <!-- <ft-button id="myButton" label="Click Me!" raised></ft-button>

      <ft-loader .count=$/{'2'}></ft-loader>
      <ft-slide heading="Phone Ringtone" open>
        <ft-button
          id="myButton"
          label="Hello i'm in Dialog box"
          raised
        ></ft-button>
        <ft-button
          id="myButton"
          label="Hello i'm in Dialog box"
          raised
        ></ft-button>
      </ft-slide>
      <wl-divider></wl-divider>
      <ft-nav>
        <ft-icon-button icon="menu" slot="navigationIcon"></ft-icon-button>
        <div slot="title">Title</div>
        <ft-icon-button
          icon="file_download"
          slot="actionItems"
        ></ft-icon-button>
        <ft-icon-button icon="print" slot="actionItems"></ft-icon-button>
        <ft-icon-button
          icon="favorite"
          slot="actionItems"
          disabled
        ></ft-icon-button>
        <div>Any content should come here</div>
      </ft-nav>
      <ft-snackbar labelText="Can't send photo. Retry in 5 seconds.">
      </ft-snackbar>
      -->
      <!--  <ft-left-drawer
        @itemClicked=\${this.printLog}
        .items=\${this.items}
      ></ft-left-drawer> -->

      <!-- <ft-table
        .tableData="\${this.abc}"
        .actionItems="\${this.actionItems}"
        .headData=\${this.headerObj}
        .enableExpansion=\${true}
      >
      </ft-table> -->
      Hellllo - What are you waiting for, Do your stuff. Play-ground is Working,
      start playing.
      <ft-switch selected></ft-switch>
      <mwc-switch selected disabled></mwc-switch>
    </div>`;
  }
}
