import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Text Field',
  component: 'ft-textfield',
  decorators: [
    (story: any) => html` <style>
        ft-textfield {
          min-width: 240px;
        }
        .shaped-filled {
          --mdc-text-field-filled-border-radius: 32px 32px 0 0;
        }
        .shaped-outlined {
          --mdc-notched-outline-leading-width: 28px;
          --mdc-notched-outline-leading-border-radius: 28px 0 0 28px;
          --mdc-notched-outline-trailing-border-radius: 0 28px 28px 0;
        }
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
  <h4>Filled</h4>
  <div class="demo-group-spaced">
    <ft-textfield label="Standard"></ft-textfield>
    <ft-textfield label="Standard" icon="event"></ft-textfield>
    <ft-textfield label="Standard" iconTrailing="delete"></ft-textfield>
  </div>

  <h4>Shaped Filled</h4>
  <div class="demo-group-spaced shaped-filled">
    <ft-textfield label="Standard"></ft-textfield>
    <ft-textfield label="Standard" icon="event"></ft-textfield>
    <ft-textfield
      class="color"
      label="Standard"
      iconTrailing="delete"
    ></ft-textfield>
  </div>

  <h4>Outlined</h4>
  <div class="demo-group-spaced">
    <ft-textfield outlined label="Standard"></ft-textfield>
    <ft-textfield outlined label="Standard" icon="event"></ft-textfield>
    <ft-textfield
      outlined
      label="Standard"
      iconTrailing="delete"
    ></ft-textfield>
  </div>

  <h4>Shaped Outlined</h4>
  <div class="demo-group-spaced shaped-outlined">
    <ft-textfield outlined label="Email" type="email"></ft-textfield>
    <ft-textfield outlined label="Standard" icon="event"></ft-textfield>
    <ft-textfield
      outlined
      label="Standard"
      iconTrailing="delete"
    ></ft-textfield>
  </div>

  <h4>Text Field without label</h4>
  <div class="demo-group-spaced">
    <ft-textfield helper="Helper Text"></ft-textfield>
    <ft-textfield outlined helper="Helper Text"></ft-textfield>
    <ft-textfield
      outlined
      helper="Helper Text"
      class="shaped-outlined"
    ></ft-textfield>
  </div>

  <h4>Text Field with Character Counter</h4>
  <div class="demo-group-spaced">
    <ft-textfield
      label="Standard"
      helper="Helper Text"
      helperPersistent
      maxlength="18"
      charCounter
    ></ft-textfield>
    <ft-textfield
      outlined
      label="Standard"
      helper="Helper Text"
      helperPersistent
      maxlength="18"
      charCounter
    ></ft-textfield>
    <ft-textfield
      outlined
      label="Standard"
      helper="Helper Text"
      helperPersistent
      maxlength="18"
      charCounter
      class="shaped-outlined"
    ></ft-textfield>
  </div>

  <h4>End-aligned</h4>
  <div class="demo-group-spaced">
    <ft-textfield
      label="Standard"
      value="End-aligned"
      endaligned
    ></ft-textfield>
    <ft-textfield
      outlined
      label="Standard"
      value="End-aligned"
      endaligned
    ></ft-textfield>
    <ft-textfield
      outlined
      label="Standard"
      value="End-aligned"
      endaligned
      class="shaped-outlined"
    ></ft-textfield>
  </div>

  <h4>Full Width</h4>
  <ft-textfield
    fullwidth
    placeholder="Fullwidth"
    helper="Helper Text"
    helperpersistent
  ></ft-textfield>
</main>`;

export const ALL = Template.bind({});

const StandardAndFilledTemplate: Story<ArgTypes> = () => html` <ft-textfield
  label="My Textfield"
></ft-textfield>`;
export const StandardAndFilled = StandardAndFilledTemplate.bind({});

const IconLeadingTemplate: Story<ArgTypes> = () => html` <ft-textfield
  label="My Textfield"
  icon="event"
></ft-textfield>`;
export const IconLeading = IconLeadingTemplate.bind({});

const IconTrailingTemplate: Story<ArgTypes> = () => html` <ft-textfield
  label="My Textfield"
  iconTrailing="delete"
></ft-textfield>`;
export const IconTrailing = IconTrailingTemplate.bind({});

const HelperTextTemplate: Story<ArgTypes> = () => html` <ft-textfield
  label="My Textfield"
  helper="Helper Text"
></ft-textfield>`;
export const HelperText = HelperTextTemplate.bind({});

const PrimaryColorTemplate: Story<ArgTypes> = () => html` <style>
    ft-textfield {
      --mdc-theme-primary: green;
    }
  </style>

  <ft-textfield label="My Textfield" iconTrailing="delete" required>
  </ft-textfield>`;
export const PrimaryColor = PrimaryColorTemplate.bind({});

const VariantOutlinedTemplate: Story<ArgTypes> = () => html` <ft-textfield
  outlined
  label="My Textfield"
  iconTrailing="delete"
>
</ft-textfield>`;
export const VariantsOutlined = VariantOutlinedTemplate.bind({});

const VariantShapedTemplate: Story<ArgTypes> = () => html` <style>
    ft-textfield.rounded {
      --mdc-shape-small: 28px;
    }
  </style>

  <ft-textfield class="rounded" label="My Textfield" outlined> </ft-textfield>`;
export const VariantShaped = VariantShapedTemplate.bind({});
