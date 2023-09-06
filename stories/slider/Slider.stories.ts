import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Slider',
  decorators: [
    (story: any) => html` <style>
        .my-container > * {
          width: 50%;
        }
        ru-slider {
          padding: 10px 20px;
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
    <ru-slider></ru-slider>
    <ru-slider discrete withtickmarks max="50" value="10" step="5"></ru-slider>
    <ru-slider disabled></ru-slider>
  `;

export const Slider = Template.bind({});
Slider.args = {};
