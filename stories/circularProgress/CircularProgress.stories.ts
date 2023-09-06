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
    <ru-circular-progress progress="0.4" id="progress1"></ru-circular-progress>
    <h3>circular-progress: determinate</h3>
    <ru-circular-progress progress="0.7"></ru-circular-progress>
    <h3>circular-progress: indeterminate</h3>
    <ru-circular-progress indeterminate></ru-circular-progress>
    <h3>circular-progress: custom color</h3>
    <ru-circular-progress
      indeterminate
      class="demo-progress-bar"
    ></ru-circular-progress>
    <h3>circular-progress: custom four color</h3>
    <ru-circular-progress-four-color
      indeterminate
      class="demo-progress-bar-four-color"
    ></ru-circular-progress-four-color>
  </main>`;
export const All = Template.bind({});
All.args = {};

const DeterminateTemplate: Story<ArgTypes> = () =>
  html` <ru-circular-progress-four-color
    progress="0.7"
  ></ru-circular-progress-four-color>`;
export const Determinate = DeterminateTemplate.bind({});

const IndeterminateTemplate: Story<ArgTypes> = () =>
  html` <ru-circular-progress-four-color
    indeterminate
  ></ru-circular-progress-four-color>`;
export const Indeterminate = IndeterminateTemplate.bind({});

const StyledTemplate: Story<ArgTypes> = () => html`
  <style>
    ru-circular-progress-four-color {
      --mdc-circular-progress-bar-color-1: #2196f3;
      --mdc-circular-progress-bar-color-2: #e91e63;
      --mdc-circular-progress-bar-color-3: #ffc107;
      --mdc-circular-progress-bar-color-4: #03dac5;
    }
  </style>
  <ru-circular-progress-four-color
    indeterminate
  ></ru-circular-progress-four-color>
`;
export const Styled = StyledTemplate.bind({});
