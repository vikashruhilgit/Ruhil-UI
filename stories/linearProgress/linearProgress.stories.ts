import { html, TemplateResult } from 'lit-html';

import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Linear-Progress',
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
    ru-linear-progress {
      width: 50%;
      margin: auto;
    }

    .demo-progress-bar {
      --mdc-theme-primary: red;
      --mdc-linear-progress-buffer-color: orange;
      --mdc-linear-progress-buffering-dots-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffcdd2'/%3E%3C/svg%3E");
    }
  </style>
  <main>
    <h3>Default</h3>
    <ru-linear-progress></ru-linear-progress>
    <h3>linear-progress: reverse</h3>
    <ru-linear-progress
      reverse
      progress="0.4"
      class="demo-progress-bar"
    ></ru-linear-progress>
    <h3>linear-progress: determinate</h3>
    <ru-linear-progress
      determinate
      progress="0.5"
      buffer="1"
    ></ru-linear-progress>
    <h3>linear-progress: determinate buffer</h3>
    <ru-linear-progress
      determinate
      progress="0.3"
      buffer="0.7"
      class="demo-progress-bar"
    ></ru-linear-progress>
    <h3>linear-progress: determinate buffer reverse</h3>
    <ru-linear-progress
      determinate
      reverse
      progress="0.2"
      buffer="0.6"
    ></ru-linear-progress>
  </main>`;
export const All = Template.bind({});
All.args = {};

const DeterminateTemplate: Story<ArgTypes> = () => html` <ru-linear-progress
  progress="0.5"
></ru-linear-progress>`;
export const Determinate = DeterminateTemplate.bind({});

const IndeterminateTemplate: Story<ArgTypes> = () =>
  html` <ru-linear-progress indeterminate></ru-linear-progress>`;
export const Indeterminate = IndeterminateTemplate.bind({});

const DeterminateBufferTemplate: Story<ArgTypes> = () =>
  html`
    <ru-linear-progress progress="0.25" buffer="0.5"></ru-linear-progress>
  `;
export const DeterminateBuffer = DeterminateBufferTemplate.bind({});

const ReversedTemplate: Story<ArgTypes> = () => html`
  <ru-linear-progress reverse progress="0.25" buffer="0.5">
  </ru-linear-progress>
`;
export const Reversed = ReversedTemplate.bind({});

const StyledTemplate: Story<ArgTypes> = () => html`
  <style>
    ru-linear-progress {
      --mdc-theme-primary: red;
      --mdc-linear-progress-buffer-color: orange;
      /* Note: all that was changed from default was "fill='orange'" */
      --mdc-linear-progress-buffering-dots-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='orange'/%3E%3C/svg%3E");
    }
  </style>
  <ru-linear-progress progress="0.25" buffer="0.5"></ru-linear-progress>
`;
export const Styled = StyledTemplate.bind({});
