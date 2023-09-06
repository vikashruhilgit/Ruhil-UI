import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Slide',
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

interface ArgTypes {
  open: boolean;
}

const Template: Story<ArgTypes> = ({ open }: ArgTypes) =>
  html`
    <ft-slide ?open=${open}>
      <ft-button label="label" raised></ft-button>
    </ft-slide>
  `;

export const Slide = Template.bind({});
Slide.args = {
  open: false,
};
