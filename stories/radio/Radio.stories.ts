import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Radio',
  component: 'ru-radio',
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
    <ru-radio id="a1" name="a" checked></ru-radio>
    <ru-radio id="a2" name="a"></ru-radio>
    <ru-radio id="a3" name="a" disabled></ru-radio>
    <div></div>
    <span class="styled">
      <ru-radio id="b1" name="b"></ru-radio>
      <ru-radio id="b2" name="b" checked></ru-radio>
      <ru-radio id="b3" name="b" disabled></ru-radio>
    </span>
  `;

export const ALL = Template.bind({});

const StandardTemplate: Story<ArgTypes> = () => html` <ru-radio
    name="myGroup"
    value="value1"
  ></ru-radio>
  <ru-radio name="myGroup" value="value2" checked></ru-radio>`;
export const Standard = StandardTemplate.bind({});

const CustomColorTemplate: Story<ArgTypes> = () => html` <style>
    ru-radio {
      background-color: #363636;

      --mdc-theme-secondary: #ff2929;
      --mdc-radio-unchecked-color: white;
    }
  </style>

  <ru-radio name="myGroup" checked></ru-radio>
  <ru-radio name="myGroup"></ru-radio>`;
export const CustomColor = CustomColorTemplate.bind({});

const DisabledCustomColorTemplate: Story<ArgTypes> = () => html` <style>
    ru-radio {
      background-color: #363636;
      --mdc-radio-disabled-color: #adadad;
    }
  </style>

  <ru-radio disabled name="myGroup"></ru-radio>
  <ru-radio disabled name="myGroup" checked></ru-radio>`;
export const DisabledCustomColor = DisabledCustomColorTemplate.bind({});

const WithFormFieldTemplate: Story<ArgTypes> = () => html` <style>
    ru-formfield {
      display: block;
    }
  </style>

  <ru-formfield label="Home">
    <ru-radio name="location"></ru-radio>
  </ru-formfield>

  <ru-formfield label="Work">
    <ru-radio name="location"></ru-radio>
  </ru-formfield>`;
export const WithFormField = WithFormFieldTemplate.bind({});
