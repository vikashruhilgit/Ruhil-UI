import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Firstech UI/Component/Expansion',
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

const Template: Story<ArgTypes> = () => html` <ft-expansion>
  <span slot="title">Title</span>
  <span slot="description">Description</span>
  <p>Here's some content</p>
</ft-expansion>`;

export const Basic = Template.bind({});
Basic.args = {};

const GroupsTemplate: Story<ArgTypes> = () => html` <ft-expansion name="group">
    <span slot="title">Expansion 1</span>
    <span slot="description">Description</span>
    <p>Here's some content</p>
  </ft-expansion>

  <ft-expansion name="group">
    <span slot="title">Expansion 2</span>
    <span slot="description">Description</span>
    <p>Here's some content</p>
  </ft-expansion>

  <ft-expansion name="group">
    <span slot="title">Expansion 3</span>
    <span slot="description">Description</span>
    <p>Here's some content</p>
  </ft-expansion>`;

export const Groups = GroupsTemplate.bind({});

const DisabledTemplate: Story<ArgTypes> = () => html` <ft-expansion
  name="group"
  disabled
>
  <span slot="title">Disabled Expansion</span>
  <span slot="description">Description</span>
  <p>Here's some content</p>
</ft-expansion>`;

export const Disabled = DisabledTemplate.bind({});
