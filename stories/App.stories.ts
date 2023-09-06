import { html, TemplateResult } from 'lit-html';
import '../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/App',
  component: 'ru-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <ru-app
    style="--ruhil-ui-background-color: ${backgroundColor}"
    .title=${title || ''}
  ></ru-app>
`;

export const App = Template.bind({});
App.args = {
  title: 'Ruhil UI',
};
