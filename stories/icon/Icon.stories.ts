import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Icon',
  component: 'ru-icon',
  decorators: [
    (story: any) => html` <style></style>
      <div class="my-container">${story()}</div>`,
  ],
  argTypes: {
    color: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  color: string;
  size: string;
}

const Template: Story<ArgTypes> = ({ color, size }: ArgTypes) =>
  html`
    <style>
      .color-size {
        color: ${color};
        --mdc-icon-size: ${size};
      }
    </style>
    <main>
      <div class="demo-group color-size">
        <ru-icon>sentiment_very_dissatisfied</ru-icon>
        <ru-icon>sentiment_dissatisfied</ru-icon>
        <ru-icon>sentiment_neutral</ru-icon>
        <ru-icon>sentiment_satisfied</ru-icon>
        <ru-icon>sentiment_very_satisfied</ru-icon>
      </div>
    </main>
  `;

const FancyTemplate: Story<ArgTypes> = ({ color, size }: ArgTypes) =>
  html`
    <style>
      .fancy {
        color: ${color};
        --mdc-icon-size: ${size};
      }
    </style>
    <main>
      <h4>color and size</h4>
      <div class="demo-group ">
        <ru-icon class="fancy">all_out</ru-icon>
        <ru-icon class="fancy">accessibility</ru-icon>
        <ru-icon class="fancy">exit_to_app</ru-icon>
        <ru-icon class="fancy">camera</ru-icon>
      </div>
    </main>
  `;

export const Icon = Template.bind({});
Icon.args = {
  size: '24px',
};

export const Fancy = FancyTemplate.bind({});
Fancy.args = {
  color: '#03a9f4',
  size: '64px',
};
