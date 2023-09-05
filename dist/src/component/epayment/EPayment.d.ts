import { LitElement } from 'lit';
import { AxiosInstance } from 'axios';
export declare class EPayment extends LitElement {
    serviceUrl: string;
    tsysHostUrl: string;
    nameLabel: string;
    cardNumberLabel: string;
    expiryLabel: string;
    zipLabel: string;
    loading: boolean;
    readonly paymentServiceUrl = "http://localhost:5000/cardservice";
    private tsysConfigData;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Disable Shadow root for this component as the TSYS script queries using the element id.
     * @returns
     */
    createRenderRoot(): this;
    private _formValidation;
    getTsysConfig(axiosObject: AxiosInstance, mId: string): void;
    private _constructScriptTag;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
