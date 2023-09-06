import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Snackbar',
  decorators: [
    (story: any) => html` <style>
        ft-icon-button {
          color: white;
        }
      </style>
      <div class="my-container">${story()}</div>`,
  ],
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const clickHandler = (e: Event) => {
  if (e.target) {
    const el: any = e.target;
    const snakbar = el.nextElementSibling;
    if (snakbar) snakbar.show();
  }
};

const Template: Story<ArgTypes> = () =>
  html`
    <ft-button @click=${clickHandler} label="Click Me!" raised></ft-button>
    <ft-snackbar
      id="photoErrorSnackbar"
      labelText="Can't send photo. Retry in 5 seconds."
    >
    </ft-snackbar>
  `;

const OptionalActionAndDismissButtonTemplate: Story<ArgTypes> = () =>
  html`
    <ft-button @click=${clickHandler} label="Click Me!" raised></ft-button>
    <ft-snackbar labelText="Can't send photo. Retry in 5 seconds.">
      <ft-button slot="action">RETRY</ft-button>
      <ft-icon-button icon="close" slot="dismiss"></ft-icon-button>
    </ft-snackbar>
  `;

const CustomActionButtonColorTemplate = () =>
  html`
    <style>
      .custom-color {
        --mdc-theme-primary: #64dc17;
      }
    </style>
    <ft-button @click=${clickHandler} label="Click Me!" raised></ft-button>
    <ft-snackbar
      class="custom-color"
      timeoutMs="1000000"
      id="snackbar-id"
      labelText="Can't send photo. Retry in 5 seconds."
    >
      <ft-button slot="action">RETRY</ft-button>
      <ft-icon-button icon="close" slot="dismiss"></ft-icon-button>
    </ft-snackbar>
  `;

const VariantStackedTemplate = () =>
  html`
    <ft-button @click=${clickHandler} label="Click Me!" raised></ft-button>
    <ft-snackbar
      stacked
      id="snackbar-id"
      labelText="Can't send photo. Retry in 5 seconds."
    >
      <ft-button slot="action">RETRY</ft-button>
      <ft-icon-button icon="close" slot="dismiss"></ft-icon-button>
    </ft-snackbar>
  `;

const VariantleadingTemplate = () =>
  html`
    <ft-button @click=${clickHandler} label="Click Me!" raised></ft-button>
    <ft-snackbar
      leading
      id="snackbar-id"
      labelText="Can't send photo. Retry in 5 seconds."
    >
      <ft-button slot="action">RETRY</ft-button>
      <ft-icon-button icon="close" slot="dismiss"></ft-icon-button>
    </ft-snackbar>
  `;
export const Default = Template.bind({});

export const OptionalActionAndDismissButton =
  OptionalActionAndDismissButtonTemplate.bind({});

export const CustomActionButtonColor = CustomActionButtonColorTemplate.bind({});
export const VariantStacked = VariantStackedTemplate.bind({});
export const Variantleading = VariantleadingTemplate.bind({});
