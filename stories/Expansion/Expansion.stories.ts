import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Expansion',
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

const Template: Story<ArgTypes> = () => html` <ru-expansion>
  <span slot="title">Title</span>
  <span slot="description">Description</span>
  <p>Here's some content</p>
</ru-expansion>`;

export const Basic = Template.bind({});
Basic.args = {};

const GroupsTemplate: Story<ArgTypes> = () => html` <ru-expansion name="group">
    <span slot="title">Expansion 1</span>
    <span slot="description">Description</span>
    <p>Here's some content</p>
  </ru-expansion>

  <ru-expansion name="group">
    <span slot="title">Expansion 2</span>
    <span slot="description">Description</span>
    <p>Here's some content</p>
  </ru-expansion>

  <ru-expansion name="group">
    <span slot="title">Expansion 3</span>
    <span slot="description">Description</span>
    <p>Here's some content</p>
  </ru-expansion>`;

export const Groups = GroupsTemplate.bind({});

const DisabledTemplate: Story<ArgTypes> = () => html` <ru-expansion
  name="group"
  disabled
>
  <span slot="title">Disabled Expansion</span>
  <span slot="description">Description</span>
  <p>Here's some content</p>
</ru-expansion>`;

export const Disabled = DisabledTemplate.bind({});
