import { html, TemplateResult } from 'lit-html';

import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Circular-Progress',
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

const Template: Story<ArgTypes> = () => html` <style>
    .demo-progress-bar {
      --mdc-theme-primary: red;
    }
    .demo-progress-bar-four-color {
      --mdc-circular-progress-bar-color-1: #2196f3;
      --mdc-circular-progress-bar-color-2: #e91e63;
      --mdc-circular-progress-bar-color-3: #ffc107;
      --mdc-circular-progress-bar-color-4: #03dac5;
    }
  </style>
  <main>
    <h3>Default</h3>
    <ft-circular-progress progress="0.4" id="progress1"></ft-circular-progress>
    <h3>circular-progress: determinate</h3>
    <ft-circular-progress progress="0.7"></ft-circular-progress>
    <h3>circular-progress: indeterminate</h3>
    <ft-circular-progress indeterminate></ft-circular-progress>
    <h3>circular-progress: custom color</h3>
    <ft-circular-progress
      indeterminate
      class="demo-progress-bar"
    ></ft-circular-progress>
    <h3>circular-progress: custom four color</h3>
    <ft-circular-progress-four-color
      indeterminate
      class="demo-progress-bar-four-color"
    ></ft-circular-progress-four-color>
  </main>`;
export const All = Template.bind({});
All.args = {};

const DeterminateTemplate: Story<ArgTypes> = () =>
  html` <ft-circular-progress-four-color
    progress="0.7"
  ></ft-circular-progress-four-color>`;
export const Determinate = DeterminateTemplate.bind({});

const IndeterminateTemplate: Story<ArgTypes> = () =>
  html` <ft-circular-progress-four-color
    indeterminate
  ></ft-circular-progress-four-color>`;
export const Indeterminate = IndeterminateTemplate.bind({});

const StyledTemplate: Story<ArgTypes> = () => html`
  <style>
    ft-circular-progress-four-color {
      --mdc-circular-progress-bar-color-1: #2196f3;
      --mdc-circular-progress-bar-color-2: #e91e63;
      --mdc-circular-progress-bar-color-3: #ffc107;
      --mdc-circular-progress-bar-color-4: #03dac5;
    }
  </style>
  <ft-circular-progress-four-color
    indeterminate
  ></ft-circular-progress-four-color>
`;
export const Styled = StyledTemplate.bind({});
