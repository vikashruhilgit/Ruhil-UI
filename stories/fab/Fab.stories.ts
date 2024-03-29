import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Fab - Floating Action Button',
  component: 'ru-fab',
  decorators: [
    (story: any) => html` <style>
        ru-fab {
          margin-right: 50px;
        }
      </style>
      <div class="my-container">${story()}</div>`,
  ],
  argTypes: {
    themeColor: { control: 'color' },
    onThemeColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  icon: string;
  label: string;
  themeColor: string;
  onThemeColor: string;
  mini: boolean;
  extended: boolean;
}

const Template: Story<ArgTypes> = ({
  icon,
  label,
  themeColor,
  onThemeColor,
  mini,
  extended,
}: ArgTypes) =>
  html`
    <style>
      .blackAndWhite {
        --mdc-theme-on-secondary: ${onThemeColor};
        --mdc-theme-secondary: ${themeColor};
      }
    </style>
    <main>
      <ru-fab .icon=${icon}></ru-fab>
      <ru-fab icon="add" ?mini=${mini}></ru-fab>
      <ru-fab
        icon="shopping_cart"
        ?extended=${extended}
        .label=${label}
      ></ru-fab>
      <ru-fab icon="share" class="blackAndWhite"></ru-fab>
    </main>
  `;

export const Fab = Template.bind({});
Fab.args = {
  icon: 'edit',
  label: 'Add To Cart',
  themeColor: 'white',
  onThemeColor: 'black',
  mini: true,
  extended: true,
};
