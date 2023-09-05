import { html, TemplateResult } from 'lit-html';
import '../../src/firstech-ui';

export default {
  title: 'Firstech UI/Component/Fab - Floating Action Button',
  component: 'ft-fab',
  decorators: [
    (story: any) => html` <style>
        ft-fab {
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
      <ft-fab .icon=${icon}></ft-fab>
      <ft-fab icon="add" ?mini=${mini}></ft-fab>
      <ft-fab
        icon="shopping_cart"
        ?extended=${extended}
        .label=${label}
      ></ft-fab>
      <ft-fab icon="share" class="blackAndWhite"></ft-fab>
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
