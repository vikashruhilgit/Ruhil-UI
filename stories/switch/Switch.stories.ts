import { html, TemplateResult } from 'lit-html';
import '../../src/firstech-ui';

export default {
  title: 'Firstech UI/Form Component/Switch',
  component: 'ft-switch',
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
    <ft-switch></ft-switch>
    <ft-switch checked></ft-switch>
    <ft-switch disabled></ft-switch>
    <ft-switch disabled checked></ft-switch>
  </div>
  <div class="demo-group">
    <span class="styled demo-group-spaced">
      <ft-switch></ft-switch>
      <ft-switch checked></ft-switch>
      <ft-switch disabled></ft-switch>
      <ft-switch disabled checked></ft-switch>
    </span>
  </div>
</main>`;

export const ALL = Template.bind({});

const StandardTemplate: Story<ArgTypes> = () => html` <ft-switch></ft-switch>`;
export const Standard = StandardTemplate.bind({});

const SelectedByDefaultTemplate: Story<ArgTypes> = () =>
  html`<ft-switch selected></ft-switch>`;
export const SelectedByDefault = SelectedByDefaultTemplate.bind({});

const DisabledTemplate: Story<ArgTypes> = () => html` <ft-switch
    disabled
  ></ft-switch>
  <ft-switch selected disabled></ft-switch>`;
export const Disabled = DisabledTemplate.bind({});

const StyledTemplate: Story<ArgTypes> = () => html` <style>
    ft-switch {
      --mdc-theme-secondary: #942a1c;
      --mdc-theme-surface: #bdb21d;
      --mdc-theme-on-surface: #c0bea1;
    }
  </style>
  <ft-switch></ft-switch>
  <ft-switch selected></ft-switch>`;
export const Styled = StyledTemplate.bind({});

const WithFormFieldTemplate: Story<ArgTypes> = () => html`<ft-formfield
  label="Airplane mode"
>
  <ft-switch selected></ft-switch>
</ft-formfield>`;
export const WithFormField = WithFormFieldTemplate.bind({});
