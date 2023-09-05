import { LitElement } from 'lit';
import 'weightless/button';
import 'weightless/divider';
import 'weightless/title';
import '@material/mwc-button';
export declare class PlayGround extends LitElement {
    printLog: (t: any) => void;
    transactionData: {
        displayItems: {
            label: string;
            type: string;
            price: string;
        }[];
        countryCode: string;
        currencyCode: string;
        totalPriceStatus: string;
        totalPrice: string;
        totalPriceLabel: string;
    };
    render(): import("lit").TemplateResult<1>;
}
