import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Text Area',
  component: 'ru-textarea',
  decorators: [
    (story: any) => html` <style>
        ru-textarea {
          min-width: 250px;
        }

        .demo-group-spaced {
          flex-wrap: wrap;
          display: flex;
          justify-content: space-evenly;
        }

        .demo-group-spaced > *,
        [fullwidth] {
          margin-top: 8px;
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

const Template: Story<ArgTypes> = () => html` <main>
  <h4>Textarea</h4>
  <div class="demo-group-spaced">
    <ru-textarea label="Standard"></ru-textarea>
    <ru-textarea outlined label="Standard"></ru-textarea>
  </div>

  <h4>Textarea with Character Counter</h4>
  <div class="demo-group-spaced">
    <ru-textarea label="Standard" maxlength="18" charCounter></ru-textarea>
    <ru-textarea
      outlined
      label="Standard"
      maxlength="18"
      charCounter
    ></ru-textarea>
  </div>

  <h4>Textarea with Helper Text</h4>
  <div class="demo-group-spaced">
    <ru-textarea
      label="Standard"
      helper="Helper Text"
      helperPersistent
    ></ru-textarea>
    <ru-textarea
      outlined
      label="Standard"
      helper="Helper Text"
      helperPersistent
    ></ru-textarea>
  </div>

  <h4>End-aligned</h4>
  <div class="demo-group-spaced">
    <ru-textarea label="Standard" value="End-aligned" endaligned></ru-textarea>
    <ru-textarea
      outlined
      label="Standard"
      value="End-aligned"
      endaligned
    ></ru-textarea>
  </div>

  <h4>Full Width Textarea</h4>
  <ru-textarea
    fullwidth
    placeholder="Full width"
    helper="Helper Text"
    helperpersistent
  ></ru-textarea>
  <ru-textarea
    outlined
    fullwidth
    placeholder="Full width"
    helper="Helper Text"
    helperpersistent
  ></ru-textarea>
</main>`;

export const TextArea = Template.bind({});

const StandardAndFilledTemplate: Story<ArgTypes> = () =>
  html` <ru-textarea label="My Textarea"></ru-textarea>`;
export const Standard = StandardAndFilledTemplate.bind({});

const HelperTextTemplate: Story<ArgTypes> = () =>
  html`<ru-textarea label="My Textarea" helper="Helper Text"></ru-textarea>`;
export const HelperText = HelperTextTemplate.bind({});

const PrimaryColorTemplate: Story<ArgTypes> = () => html` <style>
    ru-textfield {
      --mdc-theme-primary: green;
    }
  </style>

  <ru-textfield label="My Textfield" iconTrailing="delete" required>
  </ru-textfield>`;
export const PrimaryColor = PrimaryColorTemplate.bind({});

const VariantOutlinedTemplate: Story<ArgTypes> = () => html` <ru-textarea
  outlined
  label="My Textarea"
>
</ru-textarea>`;
export const VariantsOutlined = VariantOutlinedTemplate.bind({});

const VariantShapedTemplate: Story<ArgTypes> = () => html` <style>
    ru-textarea.rounded {
      --mdc-shape-small: 28px;
    }
  </style>

  <ru-textarea class="rounded" label="My Textarea" outlined> </ru-textarea>`;
export const VariantShaped = VariantShapedTemplate.bind({});
