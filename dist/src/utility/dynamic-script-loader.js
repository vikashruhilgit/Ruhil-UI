// eslint-disable-next-line no-shadow
export var JSTypes;
(function (JSTypes) {
    JSTypes["EPAYMENT"] = "ePayment";
})(JSTypes || (JSTypes = {}));
class JsFunction {
    constructor() {
        this.data = [];
        this.populateData();
    }
    populateData() {
        this.data.push({
            key: JSTypes.EPAYMENT,
            jsString: `function tsepHandler(eventType, event) { 
                     if(eventType === 'TokenEvent'){                       
                         if(event.responseCode === 'A0000'){
                            const raiseEvent = new CustomEvent('TSYSTokenEvent', { detail: event, bubbles: true, composed: true });
                            document.dispatchEvent(raiseEvent);
                         }
                     } else if(eventType === 'FieldValidationErrorEvent'){
                        const raiseEvent = new CustomEvent('TSYSFieldValidationError', { detail: event, bubbles: true, composed: true });
                        document.dispatchEvent(raiseEvent);
                     } else if(eventType === 'FieldValidationSuccessEvent'){
                        const raiseEvent = new CustomEvent('TSYSFieldValidationSuccess', { detail: event, bubbles: true, composed: true });
                        document.dispatchEvent(raiseEvent);
                     }
                  }`,
        });
    }
}
/**
 * Add styles to the Head of the document - used for those components which has shadow root disabled
 * @param styles - styles to be applied for the compoenent
 */
export const addStylesToHead = (styles) => {
    const s = document.createElement('style');
    s.innerText = styles;
    document.head.appendChild(s);
};
/**
 * Add scrupt to the HEAD of the document dynamically
 * @param script - Script to be added
 */
export const addScript = (script) => {
    const s = document.createElement('script');
    s.setAttribute('src', script.src);
    s.async = script.async;
    if (script.referrerPolicy) {
        s.referrerPolicy = script.referrerPolicy;
    }
    document.head.appendChild(s);
};
/**
 * Add JS to the body of the document
 * @param key - KEY based on which the JS function will be added.
 */
export const addJsFunction = (key) => {
    var _a, _b;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    const js = new JsFunction();
    script.innerHTML = ((_a = js.data.find(x => x.key === key)) === null || _a === void 0 ? void 0 : _a.jsString) || '';
    const s = document.body.firstChild;
    (_b = s === null || s === void 0 ? void 0 : s.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(script, s);
};
//# sourceMappingURL=dynamic-script-loader.js.map