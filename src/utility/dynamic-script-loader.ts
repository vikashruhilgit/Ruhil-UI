export interface DynamicScript {
  src: string;
  async: boolean;
  referrerPolicy?: string;
}
// eslint-disable-next-line no-shadow
export enum JSTypes {
  EPAYMENT = 'ePayment',
}
class JsFunction {
  key!: JSTypes;

  jsString!: string;

  data: Array<{ key: JSTypes; jsString: string }> = [];

  constructor() {
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
export const addStylesToHead = (styles: string): void => {
  const s = document.createElement('style');
  s.innerText = styles;
  document.head.appendChild(s);
};
/**
 * Add scrupt to the HEAD of the document dynamically
 * @param script - Script to be added
 */
export const addScript = (script: DynamicScript): void => {
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
export const addJsFunction = (key: JSTypes): void => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  const js = new JsFunction();
  script.innerHTML = js.data.find(x => x.key === key)?.jsString || '';
  const s = document.body.firstChild;
  s?.parentNode?.insertBefore(script, s);
};
