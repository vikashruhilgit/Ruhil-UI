import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Radio',
  component: 'ft-radio',
  decorators: [
    (story: any) => html` <style>
        .styled {
          display: inline-block;
          background-color: #363636;

          --mdc-theme-secondary: #ff2929;
          --mdc-radio-unchecked-color: white;
          /* Required for unchecked focus ripple */
          --mdc-theme-on-surface: white;
          --mdc-radio-disabled-color: #adadad;
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
    <ft-radio id="a1" name="a" checked></ft-radio>
    <ft-radio id="a2" name="a"></ft-radio>
    <ft-radio id="a3" name="a" disabled></ft-radio>
    <div></div>
    <span class="styled">
      <ft-radio id="b1" name="b"></ft-radio>
      <ft-radio id="b2" name="b" checked></ft-radio>
      <ft-radio id="b3" name="b" disabled></ft-radio>
    </span>
  `;

export const ALL = Template.bind({});

const StandardTemplate: Story<ArgTypes> = () => html` <ft-radio
    name="myGroup"
    value="value1"
  ></ft-radio>
  <ft-radio name="myGroup" value="value2" checked></ft-radio>`;
export const Standard = StandardTemplate.bind({});

const CustomColorTemplate: Story<ArgTypes> = () => html` <style>
    ft-radio {
      background-color: #363636;

      --mdc-theme-secondary: #ff2929;
      --mdc-radio-unchecked-color: white;
    }
  </style>

  <ft-radio name="myGroup" checked></ft-radio>
  <ft-radio name="myGroup"></ft-radio>`;
export const CustomColor = CustomColorTemplate.bind({});

const DisabledCustomColorTemplate: Story<ArgTypes> = () => html` <style>
    ft-radio {
      background-color: #363636;
      --mdc-radio-disabled-color: #adadad;
    }
  </style>

  <ft-radio disabled name="myGroup"></ft-radio>
  <ft-radio disabled name="myGroup" checked></ft-radio>`;
export const DisabledCustomColor = DisabledCustomColorTemplate.bind({});

const WithFormFieldTemplate: Story<ArgTypes> = () => html` <style>
    ft-formfield {
      display: block;
    }
  </style>

  <ft-formfield label="Home">
    <ft-radio name="location"></ft-radio>
  </ft-formfield>

  <ft-formfield label="Work">
    <ft-radio name="location"></ft-radio>
  </ft-formfield>`;
export const WithFormField = WithFormFieldTemplate.bind({});
