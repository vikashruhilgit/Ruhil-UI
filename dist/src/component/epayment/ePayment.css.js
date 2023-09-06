export const ePaymentstyles = `
  form[id='payment-form']{
    grid-gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); 
  }
  label[id^='tsep-label']{
    font-size: 0.75rem;
    color: rgba(0,0,0,0.6);
    font-family: Roboto, sans-serif;
  }
  input[id^='tsep-'] {
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    height: 28px;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
    min-width: 0px;
    box-sizing: border-box;
    border: 1.5px solid rgba(0, 0, 0, 0.38);
    border-radius: 4px;
    background: none;
    appearance: none;
    padding: 25px;
  }
  input[id^='tsep-']:hover{
    outline: none !important;
    border: 1.5px solid #385877;
  }
  input[id^='tsep-']:focus{
    outline: none !important;
    border: 2.5px solid #385877;
  }
  span[id^='error_tsep-']{
    color: red;
    font-family: Roboto, sans-serif;
    font-size: 0.75rem;
  }
`;
//# sourceMappingURL=ePayment.css.js.map