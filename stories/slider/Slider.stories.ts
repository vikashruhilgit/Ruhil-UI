import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Firstech UI/Form Component/Slider',
  decorators: [
    (story: any) => html` <style>
        .my-container > * {
          width: 50%;
        }
        ft-slider {
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
    <ft-slider></ft-slider>
    <ft-slider discrete withtickmarks max="50" value="10" step="5"></ft-slider>
    <ft-slider disabled></ft-slider>
  `;

export const Slider = Template.bind({});
Slider.args = {};
