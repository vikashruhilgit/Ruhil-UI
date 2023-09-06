import { html, TemplateResult } from 'lit-html';
import { TransactionData } from '../../src/component/gpay/GooglePay';

import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/GPay',
  component: 'ft-google-pay',
  argTypes: {
    clientId: { control: 'text' },
    transactionData: { control: 'data' },
  },
};

const printLog = (t: any) => {
  console.log(t);
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  clientId?: string;
  transactionData: TransactionData;
}

const Template: Story<ArgTypes> = ({
  clientId = '#hgvk86bvghhjbhGYvbjVH*75%Uyhfvbj98',
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
  },
}: ArgTypes) => html`
  <ft-google-pay
    @payment-processed=${printLog}
    @error=${printLog}
    .clientId=${clientId}
    .transactionData=${transactionData}
  ></ft-google-pay>
`;

export const GpayButton = Template.bind({});
GpayButton.args = {};
