export interface DynamicScript {
    src: string;
    async: boolean;
    referrerPolicy?: string;
}
export declare enum JSTypes {
    EPAYMENT = "ePayment"
}
/**
 * Add styles to the Head of the document - used for those components which has shadow root disabled
 * @param styles - styles to be applied for the compoenent
 */
export declare const addStylesToHead: (styles: string) => void;
/**
 * Add scrupt to the HEAD of the document dynamically
 * @param script - Script to be added
 */
export declare const addScript: (script: DynamicScript) => void;
/**
 * Add JS to the body of the document
 * @param key - KEY based on which the JS function will be added.
 */
export declare const addJsFunction: (key: JSTypes) => void;
