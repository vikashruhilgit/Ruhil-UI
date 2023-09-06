import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Checkbox',
  component: 'ft-checkbox',
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
      <ft-checkbox></ft-checkbox>
      <ft-checkbox checked></ft-checkbox>
      <ft-checkbox indeterminate></ft-checkbox>
      <ft-checkbox disabled></ft-checkbox>
    </div>
    <div>
      <span class="styled demo-group">
        <ft-checkbox></ft-checkbox>
        <ft-checkbox checked></ft-checkbox>
        <ft-checkbox indeterminate></ft-checkbox>
        <ft-checkbox disabled></ft-checkbox>
      </span>
    </div>
  `;

export const ALL = Template.bind({});

const StandardTemplate: Story<ArgTypes> = () => html` <ft-checkbox
  checked
></ft-checkbox>`;
export const Standard = StandardTemplate.bind({});

const StandardDisabledTemplate: Story<ArgTypes> = () => html` <div>
    <ft-checkbox></ft-checkbox>
    <ft-checkbox checked></ft-checkbox>
    <ft-checkbox indeterminate></ft-checkbox>
  </div>

  <div>
    <ft-checkbox disabled></ft-checkbox>
    <ft-checkbox disabled checked></ft-checkbox>
    <ft-checkbox disabled indeterminate></ft-checkbox>
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
    <ft-checkbox></ft-checkbox>
    <ft-checkbox checked></ft-checkbox>
    <ft-checkbox indeterminate></ft-checkbox>
  </div>

  <div>
    <ft-checkbox disabled></ft-checkbox>
    <ft-checkbox disabled checked></ft-checkbox>
    <ft-checkbox disabled indeterminate></ft-checkbox>
  </div>`;
export const StyledStandardDisabled = StyledStandardDisabledTemplate.bind({});

const WithFormFieldTemplate: Story<ArgTypes> = () => html` <style>
    ft-formfield {
      display: block;
    }
    .child {
      margin-left: 20px;
    }
  </style>

  <ft-formfield label="Additions">
    <ft-checkbox indeterminate></ft-checkbox>
  </ft-formfield>

  <ft-formfield label="Pickles">
    <ft-checkbox class="child"></ft-checkbox>
  </ft-formfield>

  <ft-formfield label="Tomato">
    <ft-checkbox class="child" checked></ft-checkbox>
  </ft-formfield>`;
export const WithFormField = WithFormFieldTemplate.bind({});
