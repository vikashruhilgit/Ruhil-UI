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
        ft-nav {
          --mdc-theme-primary: ${themeColor};
          --mdc-theme-on-primary: ${onThemeColor};
        }
      </style>`
    : ``}

  <ft-nav ?centerTitle=${centerTitle} ?dense=${dense} ?prominent=${prominent}>
    <ft-icon-button icon="menu" slot="navigationIcon"></ft-icon-button>
    <ft-icon-button icon="file_download" slot="actionItems"></ft-icon-button>
    <div slot="title">Firstech</div>
    <ft-icon-button icon="print" slot="actionItems"></ft-icon-button>
    <ft-icon-button
      icon="favorite"
      slot="actionItems"
      disabled
    ></ft-icon-button>
  </ft-nav>
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
