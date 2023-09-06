import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Switch',
  component: 'ru-switch',
  decorators: [
    (story: any) => html` <style>
        .styled {
          display: flex;
          height: 48px;
          background-color: #363636;

          --mdc-theme-secondary: #ff2929;
          --mdc-theme-on-surface: #adadad;
          --mdc-theme-surface: white;
        }

        .demo-group {
          height: 48px;
        }

        .styled.demo-group-spaced {
          margin: 0;
        }

        .demo-group,
        .demo-group-spaced {
          display: flex;
          align-items: center;
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
  <div class="demo-group">
    <ru-switch></ru-switch>
    <ru-switch checked></ru-switch>
    <ru-switch disabled></ru-switch>
    <ru-switch disabled checked></ru-switch>
  </div>
  <div class="demo-group">
    <span class="styled demo-group-spaced">
      <ru-switch></ru-switch>
      <ru-switch checked></ru-switch>
      <ru-switch disabled></ru-switch>
      <ru-switch disabled checked></ru-switch>
    </span>
  </div>
</main>`;

export const ALL = Template.bind({});

const StandardTemplate: Story<ArgTypes> = () => html` <ru-switch></ru-switch>`;
export const Standard = StandardTemplate.bind({});

const SelectedByDefaultTemplate: Story<ArgTypes> = () =>
  html`<ru-switch selected></ru-switch>`;
export const SelectedByDefault = SelectedByDefaultTemplate.bind({});

const DisabledTemplate: Story<ArgTypes> = () => html` <ru-switch
    disabled
  ></ru-switch>
  <ru-switch selected disabled></ru-switch>`;
export const Disabled = DisabledTemplate.bind({});

const StyledTemplate: Story<ArgTypes> = () => html` <style>
    ru-switch {
      --mdc-theme-secondary: #942a1c;
      --mdc-theme-surface: #bdb21d;
      --mdc-theme-on-surface: #c0bea1;
    }
  </style>
  <ru-switch></ru-switch>
  <ru-switch selected></ru-switch>`;
export const Styled = StyledTemplate.bind({});

const WithFormFieldTemplate: Story<ArgTypes> = () => html`<ru-formfield
  label="Airplane mode"
>
  <ru-switch selected></ru-switch>
</ru-formfield>`;
export const WithFormField = WithFormFieldTemplate.bind({});
