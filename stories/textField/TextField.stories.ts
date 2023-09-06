import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Text Field',
  component: 'ru-textfield',
  decorators: [
    (story: any) => html` <style>
        ru-textfield {
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
  <h4>Filled</h4>
  <div class="demo-group-spaced">
    <ru-textfield label="Standard"></ru-textfield>
    <ru-textfield label="Standard" icon="event"></ru-textfield>
    <ru-textfield label="Standard" iconTrailing="delete"></ru-textfield>
  </div>

  <h4>Shaped Filled</h4>
  <div class="demo-group-spaced shaped-filled">
    <ru-textfield label="Standard"></ru-textfield>
    <ru-textfield label="Standard" icon="event"></ru-textfield>
    <ru-textfield
      class="color"
      label="Standard"
      iconTrailing="delete"
    ></ru-textfield>
  </div>

  <h4>Outlined</h4>
  <div class="demo-group-spaced">
    <ru-textfield outlined label="Standard"></ru-textfield>
    <ru-textfield outlined label="Standard" icon="event"></ru-textfield>
    <ru-textfield
      outlined
      label="Standard"
      iconTrailing="delete"
    ></ru-textfield>
  </div>

  <h4>Shaped Outlined</h4>
  <div class="demo-group-spaced shaped-outlined">
    <ru-textfield outlined label="Email" type="email"></ru-textfield>
    <ru-textfield outlined label="Standard" icon="event"></ru-textfield>
    <ru-textfield
      outlined
      label="Standard"
      iconTrailing="delete"
    ></ru-textfield>
  </div>

  <h4>Text Field without label</h4>
  <div class="demo-group-spaced">
    <ru-textfield helper="Helper Text"></ru-textfield>
    <ru-textfield outlined helper="Helper Text"></ru-textfield>
    <ru-textfield
      outlined
      helper="Helper Text"
      class="shaped-outlined"
    ></ru-textfield>
  </div>

  <h4>Text Field with Character Counter</h4>
  <div class="demo-group-spaced">
    <ru-textfield
      label="Standard"
      helper="Helper Text"
      helperPersistent
      maxlength="18"
      charCounter
    ></ru-textfield>
    <ru-textfield
      outlined
      label="Standard"
      helper="Helper Text"
      helperPersistent
      maxlength="18"
      charCounter
    ></ru-textfield>
    <ru-textfield
      outlined
      label="Standard"
      helper="Helper Text"
      helperPersistent
      maxlength="18"
      charCounter
      class="shaped-outlined"
    ></ru-textfield>
  </div>

  <h4>End-aligned</h4>
  <div class="demo-group-spaced">
    <ru-textfield
      label="Standard"
      value="End-aligned"
      endaligned
    ></ru-textfield>
    <ru-textfield
      outlined
      label="Standard"
      value="End-aligned"
      endaligned
    ></ru-textfield>
    <ru-textfield
      outlined
      label="Standard"
      value="End-aligned"
      endaligned
      class="shaped-outlined"
    ></ru-textfield>
  </div>

  <h4>Full Width</h4>
  <ru-textfield
    fullwidth
    placeholder="Fullwidth"
    helper="Helper Text"
    helperpersistent
  ></ru-textfield>
</main>`;

export const ALL = Template.bind({});

const StandardAndFilledTemplate: Story<ArgTypes> = () => html` <ru-textfield
  label="My Textfield"
></ru-textfield>`;
export const StandardAndFilled = StandardAndFilledTemplate.bind({});

const IconLeadingTemplate: Story<ArgTypes> = () => html` <ru-textfield
  label="My Textfield"
  icon="event"
></ru-textfield>`;
export const IconLeading = IconLeadingTemplate.bind({});

const IconTrailingTemplate: Story<ArgTypes> = () => html` <ru-textfield
  label="My Textfield"
  iconTrailing="delete"
></ru-textfield>`;
export const IconTrailing = IconTrailingTemplate.bind({});

const HelperTextTemplate: Story<ArgTypes> = () => html` <ru-textfield
  label="My Textfield"
  helper="Helper Text"
></ru-textfield>`;
export const HelperText = HelperTextTemplate.bind({});

const PrimaryColorTemplate: Story<ArgTypes> = () => html` <style>
    ru-textfield {
      --mdc-theme-primary: green;
    }
  </style>

  <ru-textfield label="My Textfield" iconTrailing="delete" required>
  </ru-textfield>`;
export const PrimaryColor = PrimaryColorTemplate.bind({});

const VariantOutlinedTemplate: Story<ArgTypes> = () => html` <ru-textfield
  outlined
  label="My Textfield"
  iconTrailing="delete"
>
</ru-textfield>`;
export const VariantsOutlined = VariantOutlinedTemplate.bind({});

const VariantShapedTemplate: Story<ArgTypes> = () => html` <style>
    ru-textfield.rounded {
      --mdc-shape-small: 28px;
    }
  </style>

  <ru-textfield class="rounded" label="My Textfield" outlined> </ru-textfield>`;
export const VariantShaped = VariantShapedTemplate.bind({});
