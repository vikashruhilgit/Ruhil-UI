import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Formfield',
  component: 'ru-formfield',
  decorators: [
    (story: any) => html` <style></style>
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
    <ru-formfield label="Tomato">
      <ru-checkbox checked></ru-checkbox>
    </ru-formfield>

    <h4>Align End</h4>
    <ru-formfield alignEnd label="This is a checkbox.">
      <ru-checkbox></ru-checkbox>
    </ru-formfield>

    <h4>Native Element</h4>
    <ru-formfield alignEnd label="Enter a date.">
      <input type="date" />
    </ru-formfield>

    <h4>Switch</h4>
    <ru-formfield label="This is a switch.">
      <ru-switch></ru-switch>
    </ru-formfield>

    <h4>Radio Button</h4>
    <ru-formfield label="This is a radio.">
      <ru-radio id="one" name="a"></ru-radio>
    </ru-formfield>
    <ru-formfield label="This is a radio.">
      <ru-radio id="two" name="a" checked></ru-radio>
    </ru-formfield>
    <ru-formfield label="This is a radio.">
      <ru-radio id="three" name="a"></ru-radio>
    </ru-formfield>
  `;

export const All = Template.bind({});

const WithCheckboxTemplate: Story<ArgTypes> = () =>
  html`
    <ru-formfield label="Tomato">
      <ru-checkbox checked></ru-checkbox>
    </ru-formfield>
  `;

export const WithCheckbox = WithCheckboxTemplate.bind({});

const NowrapLabelWithCheckboxTemplate: Story<ArgTypes> = () =>
  html`
    <style>
      ru-formfield[nowrap] {
        width: 150px;
      }
    </style>
    <ru-formfield label="really really long label" nowrap>
      <ru-checkbox></ru-checkbox>
    </ru-formfield>
  `;
export const NowrapLabelWithCheckbox = NowrapLabelWithCheckboxTemplate.bind({});

const WithRadioTemplate: Story<ArgTypes> = () =>
  html`
    <style>
      ru-formfield {
        display: block;
      }
    </style>

    <ru-formfield label="Home">
      <ru-radio name="location" checked></ru-radio>
    </ru-formfield>

    <ru-formfield label="Work">
      <ru-radio name="location"></ru-radio>
    </ru-formfield>
  `;
export const WithRadio = WithRadioTemplate.bind({});

const WithSwitchTemplate: Story<ArgTypes> = () =>
  html`
    <ru-formfield label="Airplane mode">
      <ru-switch checked></ru-switch>
    </ru-formfield>
  `;
export const WithSwitch = WithSwitchTemplate.bind({});
