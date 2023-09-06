import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Checkbox',
  component: 'ru-checkbox',
  decorators: [
    (story: any) => html` <style>
        .styled.demo-group {
          display: inline-block;
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

const Template: Story<ArgTypes> = () =>
  html`
    <style>
      .styled {
        background-color: #363636;
        display: flex;

        --mdc-theme-secondary: #ff2929;
        --mdc-checkbox-unchecked-color: white;
        /* Required for unchecked focus ripple */
        --mdc-theme-on-surface: white;
        --mdc-checkbox-disabled-color: #adadad;
        --mdc-checkbox-mark-color: #363636;
      }
    </style>
    <div class="demo-group">
      <ru-checkbox></ru-checkbox>
      <ru-checkbox checked></ru-checkbox>
      <ru-checkbox indeterminate></ru-checkbox>
      <ru-checkbox disabled></ru-checkbox>
    </div>
    <div>
      <span class="styled demo-group">
        <ru-checkbox></ru-checkbox>
        <ru-checkbox checked></ru-checkbox>
        <ru-checkbox indeterminate></ru-checkbox>
        <ru-checkbox disabled></ru-checkbox>
      </span>
    </div>
  `;

export const ALL = Template.bind({});

const StandardTemplate: Story<ArgTypes> = () => html` <ru-checkbox
  checked
></ru-checkbox>`;
export const Standard = StandardTemplate.bind({});

const StandardDisabledTemplate: Story<ArgTypes> = () => html` <div>
    <ru-checkbox></ru-checkbox>
    <ru-checkbox checked></ru-checkbox>
    <ru-checkbox indeterminate></ru-checkbox>
  </div>

  <div>
    <ru-checkbox disabled></ru-checkbox>
    <ru-checkbox disabled checked></ru-checkbox>
    <ru-checkbox disabled indeterminate></ru-checkbox>
  </div>`;
export const StandardDisabled = StandardDisabledTemplate.bind({});

const StyledStandardDisabledTemplate: Story<ArgTypes> = () => html` <style>
    .demo {
      background-color: #363636;

      --mdc-theme-secondary: #ff2929;
      --mdc-checkbox-unchecked-color: white;
      /* Required for unchecked focus ripple */
      --mdc-theme-on-surface: white;
      --mdc-checkbox-disabled-color: #adadad;
      --mdc-checkbox-ink-color: #363636;
    }
  </style>

  <div class="demo">
    <ru-checkbox></ru-checkbox>
    <ru-checkbox checked></ru-checkbox>
    <ru-checkbox indeterminate></ru-checkbox>
  </div>

  <div>
    <ru-checkbox disabled></ru-checkbox>
    <ru-checkbox disabled checked></ru-checkbox>
    <ru-checkbox disabled indeterminate></ru-checkbox>
  </div>`;
export const StyledStandardDisabled = StyledStandardDisabledTemplate.bind({});

const WithFormFieldTemplate: Story<ArgTypes> = () => html` <style>
    ru-formfield {
      display: block;
    }
    .child {
      margin-left: 20px;
    }
  </style>

  <ru-formfield label="Additions">
    <ru-checkbox indeterminate></ru-checkbox>
  </ru-formfield>

  <ru-formfield label="Pickles">
    <ru-checkbox class="child"></ru-checkbox>
  </ru-formfield>

  <ru-formfield label="Tomato">
    <ru-checkbox class="child" checked></ru-checkbox>
  </ru-formfield>`;
export const WithFormField = WithFormFieldTemplate.bind({});
