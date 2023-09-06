import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Divider',
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
      ru-divider {
        --divider-color: ${color};
        --divider-size: ${size};
      }
    </style>
    <ru-divider></ru-divider>`;

export const Divider = Template.bind({});
Divider.args = {
  color: 'lightgray',
  size: '1px',
};

const VerticalTemplate: Story<ArgTypes> = ({ color, size }: ArgTypes) =>
  html` <style>
      ru-divider {
        --divider-color: ${color};
        --divider-size: ${size};
      }
      .height {
        height: 100px;
      }
    </style>
    <ru-divider class="height" vertical></ru-divider>`;

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
  color: 'lightgray',
  size: '1px',
};
