import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Formfield',
  component: 'ft-formfield',
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
    <ft-formfield label="Tomato">
      <ft-checkbox checked></ft-checkbox>
    </ft-formfield>

    <h4>Align End</h4>
    <ft-formfield alignEnd label="This is a checkbox.">
      <ft-checkbox></ft-checkbox>
    </ft-formfield>

    <h4>Native Element</h4>
    <ft-formfield alignEnd label="Enter a date.">
      <input type="date" />
    </ft-formfield>

    <h4>Switch</h4>
    <ft-formfield label="This is a switch.">
      <ft-switch></ft-switch>
    </ft-formfield>

    <h4>Radio Button</h4>
    <ft-formfield label="This is a radio.">
      <ft-radio id="one" name="a"></ft-radio>
    </ft-formfield>
    <ft-formfield label="This is a radio.">
      <ft-radio id="two" name="a" checked></ft-radio>
    </ft-formfield>
    <ft-formfield label="This is a radio.">
      <ft-radio id="three" name="a"></ft-radio>
    </ft-formfield>
  `;

export const All = Template.bind({});

const WithCheckboxTemplate: Story<ArgTypes> = () =>
  html`
    <ft-formfield label="Tomato">
      <ft-checkbox checked></ft-checkbox>
    </ft-formfield>
  `;

export const WithCheckbox = WithCheckboxTemplate.bind({});

const NowrapLabelWithCheckboxTemplate: Story<ArgTypes> = () =>
  html`
    <style>
      ft-formfield[nowrap] {
        width: 150px;
      }
    </style>
    <ft-formfield label="really really long label" nowrap>
      <ft-checkbox></ft-checkbox>
    </ft-formfield>
  `;
export const NowrapLabelWithCheckbox = NowrapLabelWithCheckboxTemplate.bind({});

const WithRadioTemplate: Story<ArgTypes> = () =>
  html`
    <style>
      ft-formfield {
        display: block;
      }
    </style>

    <ft-formfield label="Home">
      <ft-radio name="location" checked></ft-radio>
    </ft-formfield>

    <ft-formfield label="Work">
      <ft-radio name="location"></ft-radio>
    </ft-formfield>
  `;
export const WithRadio = WithRadioTemplate.bind({});

const WithSwitchTemplate: Story<ArgTypes> = () =>
  html`
    <ft-formfield label="Airplane mode">
      <ft-switch checked></ft-switch>
    </ft-formfield>
  `;
export const WithSwitch = WithSwitchTemplate.bind({});
