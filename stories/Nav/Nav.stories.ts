import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Navigation',
  decorators: [
    (story: any) => html` <style></style>
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
  useCustonColor: boolean;
  centerTitle: boolean;
  dense: boolean;
  prominent: boolean;
  themeColor: string;
  onThemeColor: string;
}

const Template: Story<ArgTypes> = ({
  useCustonColor,
  centerTitle,
  dense,
  prominent,
  themeColor,
  onThemeColor,
}: ArgTypes) => html`
  ${useCustonColor
    ? html` <style>
        ru-nav {
          --mdc-theme-primary: ${themeColor};
          --mdc-theme-on-primary: ${onThemeColor};
        }
      </style>`
    : ``}

  <ru-nav ?centerTitle=${centerTitle} ?dense=${dense} ?prominent=${prominent}>
    <ru-icon-button icon="menu" slot="navigationIcon"></ru-icon-button>
    <ru-icon-button icon="file_download" slot="actionItems"></ru-icon-button>
    <div slot="title">Ruhil UI</div>
    <ru-icon-button icon="print" slot="actionItems"></ru-icon-button>
    <ru-icon-button
      icon="favorite"
      slot="actionItems"
      disabled
    ></ru-icon-button>
  </ru-nav>
`;

export const Navigation = Template.bind({});
Navigation.args = {
  useCustonColor: false,
  centerTitle: false,
  dense: false,
  prominent: false,
  themeColor: '#861111',
  onThemeColor: '#fff',
};
