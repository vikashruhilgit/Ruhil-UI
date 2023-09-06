import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Snackbar',
  decorators: [
    (story: any) => html` <style>
        ru-icon-button {
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
    <ru-button @click=${clickHandler} label="Click Me!" raised></ru-button>
    <ru-snackbar
      id="photoErrorSnackbar"
      labelText="Can't send photo. Retry in 5 seconds."
    >
    </ru-snackbar>
  `;

const OptionalActionAndDismissButtonTemplate: Story<ArgTypes> = () =>
  html`
    <ru-button @click=${clickHandler} label="Click Me!" raised></ru-button>
    <ru-snackbar labelText="Can't send photo. Retry in 5 seconds.">
      <ru-button slot="action">RETRY</ru-button>
      <ru-icon-button icon="close" slot="dismiss"></ru-icon-button>
    </ru-snackbar>
  `;

const CustomActionButtonColorTemplate = () =>
  html`
    <style>
      .custom-color {
        --mdc-theme-primary: #64dc17;
      }
    </style>
    <ru-button @click=${clickHandler} label="Click Me!" raised></ru-button>
    <ru-snackbar
      class="custom-color"
      timeoutMs="1000000"
      id="snackbar-id"
      labelText="Can't send photo. Retry in 5 seconds."
    >
      <ru-button slot="action">RETRY</ru-button>
      <ru-icon-button icon="close" slot="dismiss"></ru-icon-button>
    </ru-snackbar>
  `;

const VariantStackedTemplate = () =>
  html`
    <ru-button @click=${clickHandler} label="Click Me!" raised></ru-button>
    <ru-snackbar
      stacked
      id="snackbar-id"
      labelText="Can't send photo. Retry in 5 seconds."
    >
      <ru-button slot="action">RETRY</ru-button>
      <ru-icon-button icon="close" slot="dismiss"></ru-icon-button>
    </ru-snackbar>
  `;

const VariantleadingTemplate = () =>
  html`
    <ru-button @click=${clickHandler} label="Click Me!" raised></ru-button>
    <ru-snackbar
      leading
      id="snackbar-id"
      labelText="Can't send photo. Retry in 5 seconds."
    >
      <ru-button slot="action">RETRY</ru-button>
      <ru-icon-button icon="close" slot="dismiss"></ru-icon-button>
    </ru-snackbar>
  `;
export const Default = Template.bind({});

export const OptionalActionAndDismissButton =
  OptionalActionAndDismissButtonTemplate.bind({});

export const CustomActionButtonColor = CustomActionButtonColorTemplate.bind({});
export const VariantStacked = VariantStackedTemplate.bind({});
export const Variantleading = VariantleadingTemplate.bind({});
