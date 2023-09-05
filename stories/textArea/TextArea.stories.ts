import { html, TemplateResult } from 'lit-html';
import '../../src/firstech-ui';

export default {
  title: 'Firstech UI/Form Component/Text Area',
  component: 'ft-textarea',
  decorators: [
    (story: any) => html` <style>
        ft-textarea {
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
    <ft-textarea label="Standard"></ft-textarea>
    <ft-textarea outlined label="Standard"></ft-textarea>
  </div>

  <h4>Textarea with Character Counter</h4>
  <div class="demo-group-spaced">
    <ft-textarea label="Standard" maxlength="18" charCounter></ft-textarea>
    <ft-textarea
      outlined
      label="Standard"
      maxlength="18"
      charCounter
    ></ft-textarea>
  </div>

  <h4>Textarea with Helper Text</h4>
  <div class="demo-group-spaced">
    <ft-textarea
      label="Standard"
      helper="Helper Text"
      helperPersistent
    ></ft-textarea>
    <ft-textarea
      outlined
      label="Standard"
      helper="Helper Text"
      helperPersistent
    ></ft-textarea>
  </div>

  <h4>End-aligned</h4>
  <div class="demo-group-spaced">
    <ft-textarea label="Standard" value="End-aligned" endaligned></ft-textarea>
    <ft-textarea
      outlined
      label="Standard"
      value="End-aligned"
      endaligned
    ></ft-textarea>
  </div>

  <h4>Full Width Textarea</h4>
  <ft-textarea
    fullwidth
    placeholder="Full width"
    helper="Helper Text"
    helperpersistent
  ></ft-textarea>
  <ft-textarea
    outlined
    fullwidth
    placeholder="Full width"
    helper="Helper Text"
    helperpersistent
  ></ft-textarea>
</main>`;

export const TextArea = Template.bind({});

const StandardAndFilledTemplate: Story<ArgTypes> = () =>
  html` <ft-textarea label="My Textarea"></ft-textarea>`;
export const Standard = StandardAndFilledTemplate.bind({});

const HelperTextTemplate: Story<ArgTypes> = () =>
  html`<ft-textarea label="My Textarea" helper="Helper Text"></ft-textarea>`;
export const HelperText = HelperTextTemplate.bind({});

const PrimaryColorTemplate: Story<ArgTypes> = () => html` <style>
    ft-textfield {
      --mdc-theme-primary: green;
    }
  </style>

  <ft-textfield label="My Textfield" iconTrailing="delete" required>
  </ft-textfield>`;
export const PrimaryColor = PrimaryColorTemplate.bind({});

const VariantOutlinedTemplate: Story<ArgTypes> = () => html` <ft-textarea
  outlined
  label="My Textarea"
>
</ft-textarea>`;
export const VariantsOutlined = VariantOutlinedTemplate.bind({});

const VariantShapedTemplate: Story<ArgTypes> = () => html` <style>
    ft-textarea.rounded {
      --mdc-shape-small: 28px;
    }
  </style>

  <ft-textarea class="rounded" label="My Textarea" outlined> </ft-textarea>`;
export const VariantShaped = VariantShapedTemplate.bind({});
