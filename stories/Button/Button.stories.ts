import { html, TemplateResult } from 'lit-html';
import '../../src/firstech-ui';

export default {
  title: 'Firstech UI/Component/Button',
  component: 'ft-button',
  decorators: [
    (story: any) => html` <style>
        ft-button {
          margin: 20px;
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
  label?: string;
  icon: string;
  raised: boolean;
  outlined: boolean;
  unelevated: boolean;
  dense: boolean;
  trailingIcon: boolean;
  disabled: boolean;
  themeColor: string;
  onThemeColor: string;
}

const Template: Story<ArgTypes> = ({
  label,
  icon,
  raised,
  outlined,
  unelevated,
  dense,
  trailingIcon,
  disabled,
  themeColor,
  onThemeColor,
}: ArgTypes) =>
  html`
    <style>
      ft-button {
        --mdc-theme-primary: ${themeColor};
        --mdc-theme-on-primary: ${onThemeColor};
      }
    </style>
    <main>
      <h2>DEMO</h2>
      <div class="demo-group wrap">
        <ft-button
          icon=${icon || 'code'}
          ?outlined=${outlined}
          ?unelevated=${unelevated}
          ?dense=${dense}
          ?trailingIcon=${trailingIcon}
          ?disabled=${disabled}
          label=${label}
          ?raised=${raised}
        ></ft-button>
      </div>

      <h2>Standard</h2>
      <div class="demo-group wrap">
        <ft-button label="standard"></ft-button>
        <ft-button label="standard" icon="code"></ft-button>
      </div>

      <h2>Outlined</h2>
      <div class="demo-group wrap">
        <ft-button outlined label="outlined"></ft-button>
        <ft-button outlined label="outlined" icon="code"></ft-button>
      </div>

      <h2>Raised</h2>
      <div class="demo-group wrap">
        <ft-button raised label="raised"></ft-button>
        <ft-button raised label="raised" icon="code"></ft-button>
      </div>

      <h2>Unelevated</h2>
      <div class="demo-group wrap">
        <ft-button unelevated label="unelevated"></ft-button>
        <ft-button unelevated label="unelevated" icon="code"></ft-button>
      </div>

      <h2>Dense</h2>
      <div class="demo-group wrap">
        <ft-button dense unelevated label="dense"></ft-button>
        <ft-button dense unelevated label="dense" icon="code"></ft-button>
      </div>

      <h2>Trailing icon</h2>
      <div class="demo-group wrap">
        <ft-button label="trailing icon" icon="code" trailingIcon></ft-button>
        <ft-button
          outlined
          label="trailing icon"
          icon="code"
          trailingIcon
        ></ft-button>
        <ft-button
          raised
          label="trailing icon"
          icon="code"
          trailingIcon
        ></ft-button>
        <ft-button
          unelevated
          label="trailing icon"
          icon="code"
          trailingIcon
        ></ft-button>
      </div>

      <h2>Disabled</h2>
      <div class="demo-group wrap">
        <ft-button disabled label="disabled" icon="code"></ft-button>
        <ft-button disabled outlined label="disabled" icon="code"></ft-button>
        <ft-button disabled raised label="disabled" icon="code"></ft-button>
        <ft-button disabled unelevated label="disabled" icon="code"></ft-button>
      </div>

      <h2>Full Width</h2>
      <div class="demo-group wrap">
        <ft-button fullwidth outlined label="full-width"></ft-button>
      </div>

      <h2>Styling</h2>
      <style data-pre="main-colors">
        .main-colors {
          --mdc-theme-primary: darkgreen;
          --mdc-theme-on-primary: aqua;
          --mdc-button-disabled-fill-color: darkseagreen;
          --mdc-button-disabled-ink-color: aliceblue;
        }
      </style>
      <pre id="main-colors"></pre>
      <div class="demo-group wrap main-colors">
        <ft-button icon="code" label="standard"></ft-button>
        <ft-button outlined icon="code" label="outlined"></ft-button>
        <ft-button raised icon="code" label="raised"></ft-button>
        <ft-button
          raised
          icon="code"
          label="raised-disabled"
          disabled
        ></ft-button>
        <ft-button unelevated icon="code" label="unelevated"></ft-button>
        <ft-button
          unelevated
          icon="code"
          label="unelevated-disabled"
          disabled
        ></ft-button>
      </div>

      <style data-pre="text">
        .text {
          --mdc-typography-button-text-transform: lowercase;
          --mdc-typography-button-letter-spacing: 4px;
        }
      </style>
      <pre id="text"></pre>
      <div class="demo-group wrap text">
        <ft-button icon="code" label="lowerspace"></ft-button>
        <ft-button outlined icon="code" label="lowerspace"></ft-button>
        <ft-button raised icon="code" label="lowerspace"></ft-button>
        <ft-button unelevated icon="code" label="lowerspace"></ft-button>
      </div>

      <style data-pre="horizontal-padding">
        .horizontal-padding {
          --mdc-button-horizontal-padding: 50px;
        }
      </style>
      <pre id="horizontal-padding"></pre>
      <div class="demo-group wrap horizontal-padding">
        <ft-button icon="code" label="padding"></ft-button>
        <ft-button outlined icon="code" label="padding"></ft-button>
        <ft-button raised icon="code" label="padding"></ft-button>
        <ft-button unelevated icon="code" label="padding"></ft-button>
      </div>

      <style data-pre="outline">
        .outline .themed {
          --mdc-theme-primary: royalblue;
          --mdc-button-disabled-ink-color: powderblue;
        }

        .outline .outline-different {
          --mdc-button-outline-color: darkgreen;
          --mdc-button-disabled-outline-color: palegreen;
          --mdc-button-disabled-ink-color: plum;
        }

        .outline .width {
          --mdc-button-outline-width: 5px;
        }
      </style>
      <pre id="outline"></pre>
      <div class="demo-group wrap outline">
        <ft-button
          outlined
          class="themed"
          icon="code"
          label="themed"
        ></ft-button>
        <ft-button
          outlined
          class="themed"
          disabled
          icon="code"
          label="themed"
        ></ft-button>
        <ft-button
          outlined
          class="outline-different"
          icon="code"
          label="outline-different"
        ></ft-button>
        <ft-button
          outlined
          class="outline-different"
          disabled
          icon="code"
          label="outline-different"
        ></ft-button>
        <ft-button outlined class="width" icon="code" label="width"></ft-button>
        <ft-button
          outlined
          class="width"
          disabled
          icon="code"
          label="width"
        ></ft-button>
      </div>
    </main>
  `;

export const Buttons = Template.bind({});
Buttons.args = {
  label: "Hello i'm a Button",
  icon: 'code',
  outlined: false,
  unelevated: false,
  dense: false,
  trailingIcon: false,
  disabled: false,
  raised: false,
  themeColor: '#ad0000',
  onThemeColor: '#ffffff',
};
