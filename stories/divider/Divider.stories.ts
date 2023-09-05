import { html, TemplateResult } from 'lit-html';
import '../../src/firstech-ui';

export default {
  title: 'Firstech UI/Component/Divider',
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
  html` <style>
      ft-divider {
        --divider-color: ${color};
        --divider-size: ${size};
      }
    </style>
    <ft-divider></ft-divider>`;

export const Divider = Template.bind({});
Divider.args = {
  color: 'lightgray',
  size: '1px',
};

const VerticalTemplate: Story<ArgTypes> = ({ color, size }: ArgTypes) =>
  html` <style>
      ft-divider {
        --divider-color: ${color};
        --divider-size: ${size};
      }
      .height {
        height: 100px;
      }
    </style>
    <ft-divider class="height" vertical></ft-divider>`;

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
  color: 'lightgray',
  size: '1px',
};
