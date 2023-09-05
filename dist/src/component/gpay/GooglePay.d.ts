import { LitElement } from 'lit';
declare global {
    interface Window {
        google: any;
    }
}
export interface PaymentItem {
    label: string;
    type: string;
    price: string;
}
export interface TransactionData {
    displayItems: PaymentItem[];
    countryCode: string;
    currencyCode: string;
    totalPriceStatus: string;
    totalPrice: string;
    totalPriceLabel: string;
}
interface GError {
    status: boolean;
    msg: string;
    detailError?: any;
}
export interface GPayConfig {
    publicKey: string;
    customerkey: string;
    environment?: 'TEST' | 'PRODUCTION';
    buttonColor?: 'black' | 'white';
    buttonLocale?: string;
    type?: 'AUTH' | 'PAYMENT';
}
declare type PromiseType = () => Promise<unknown>;
export declare class GooglePay extends LitElement {
    private _error;
    private _config;
    private _transactionData;
    private _paymentsClient;
    _iframe: any;
    private _onPaymentAuthorized;
    /**
     * Define the version of the Google Pay API referenced when creating your
     * configuration
     *
     * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataRequest|apiVersion in PaymentDataRequest}
     */
    _baseRequest: {
        apiVersion: number;
        apiVersionMinor: number;
    };
    /**
     * Card networks supported by your site and your gateway
     *
     * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
     * @todo confirm card networks supported by your site and gateway
     */
    _allowedCardNetworks: string[];
    /**
     * Card authentication methods supported by your site and your gateway
     *
     * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
     * @todo confirm your processor supports Android device tokens for your
     * supported card networks
     */
    _allowedCardAuthMethods: string[];
    /**
     * Identify your gateway and your site's gateway merchant identifier
     *
     * The Google Pay API response will return an encrypted payment method capable
     * of being charged by a supported gateway after payer authorization
     *
     * @todo check with your gateway on the parameters to pass
     * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway|PaymentMethodTokenizationSpecification}
     */
    _tokenizationSpecification: {
        type: string;
        parameters: {
            protocolVersion: string;
            publicKey: string;
        };
    };
    /**
     * Describe your site's support for the CARD payment method and its required
     * fields
     *
     * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
     */
    _baseCardPaymentMethod: {
        type: string;
        parameters: {
            allowedAuthMethods: string[];
            allowedCardNetworks: string[];
        };
    };
    /**
     * Describe your site's support for the CARD payment method including optional
     * fields
     *
     * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
     */
    _cardPaymentMethod: {
        tokenizationSpecification: {
            type: string;
            parameters: {
                protocolVersion: string;
                publicKey: string;
            };
        };
        type: string;
        parameters: {
            allowedAuthMethods: string[];
            allowedCardNetworks: string[];
        };
    };
    renderGpay: (config: GPayConfig, transactionData: TransactionData, paymentCallback: PromiseType) => void;
    _checkAndLoadGooglePayButton: () => void;
    _getClientInfo: (config: GPayConfig) => void;
    _setClientData: (config: GPayConfig) => void;
    _onGooglePayLoaded: () => void;
    _getGoogleIsReadyToPayRequest: () => {
        allowedPaymentMethods: {
            type: string;
            parameters: {
                allowedAuthMethods: string[];
                allowedCardNetworks: string[];
            };
        }[];
        apiVersion: number;
        apiVersionMinor: number;
    };
    _googleMerchantInfo: {
        merchantId: string;
        merchantName: string;
    };
    _getRegistredMerchantInfo: (merchantName: string) => {
        merchantName: string;
        merchantId: string;
    };
    _getGooglePaymentsClient: () => any;
    _addGooglePayButton: () => void;
    _onGooglePaymentButtonClicked: () => void;
    _getGooglePaymentDataRequest: () => any;
    _errorHandler: (err: GError) => void;
    _refreshButton: () => void;
    errorMsg: import("lit").TemplateResult<1>;
    render: () => import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
export {};
