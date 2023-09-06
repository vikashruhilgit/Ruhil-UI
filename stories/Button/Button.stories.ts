import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Button',
  component: 'ru-button',
  decorators: [
    (story: any) => html` <style>
        ru-button {
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
      ru-button {
        --mdc-theme-primary: ${themeColor};
        --mdc-theme-on-primary: ${onThemeColor};
      }
    </style>
    <main>
      <h2>DEMO</h2>
      <div class="demo-group wrap">
        <ru-button
          icon=${icon || 'code'}
          ?outlined=${outlined}
          ?unelevated=${unelevated}
          ?dense=${dense}
          ?trailingIcon=${trailingIcon}
          ?disabled=${disabled}
          label=${label}
          ?raised=${raised}
        ></ru-button>
      </div>

      <h2>Standard</h2>
      <div class="demo-group wrap">
        <ru-button label="standard"></ru-button>
        <ru-button label="standard" icon="code"></ru-button>
      </div>

      <h2>Outlined</h2>
      <div class="demo-group wrap">
        <ru-button outlined label="outlined"></ru-button>
        <ru-button outlined label="outlined" icon="code"></ru-button>
      </div>

      <h2>Raised</h2>
      <div class="demo-group wrap">
        <ru-button raised label="raised"></ru-button>
        <ru-button raised label="raised" icon="code"></ru-button>
      </div>

      <h2>Unelevated</h2>
      <div class="demo-group wrap">
        <ru-button unelevated label="unelevated"></ru-button>
        <ru-button unelevated label="unelevated" icon="code"></ru-button>
      </div>

      <h2>Dense</h2>
      <div class="demo-group wrap">
        <ru-button dense unelevated label="dense"></ru-button>
        <ru-button dense unelevated label="dense" icon="code"></ru-button>
      </div>

      <h2>Trailing icon</h2>
      <div class="demo-group wrap">
        <ru-button label="trailing icon" icon="code" trailingIcon></ru-button>
        <ru-button
          outlined
          label="trailing icon"
          icon="code"
          trailingIcon
        ></ru-button>
        <ru-button
          raised
          label="trailing icon"
          icon="code"
          trailingIcon
        ></ru-button>
        <ru-button
          unelevated
          label="trailing icon"
          icon="code"
          trailingIcon
        ></ru-button>
      </div>

      <h2>Disabled</h2>
      <div class="demo-group wrap">
        <ru-button disabled label="disabled" icon="code"></ru-button>
        <ru-button disabled outlined label="disabled" icon="code"></ru-button>
        <ru-button disabled raised label="disabled" icon="code"></ru-button>
        <ru-button disabled unelevated label="disabled" icon="code"></ru-button>
      </div>

      <h2>Full Width</h2>
      <div class="demo-group wrap">
        <ru-button fullwidth outlined label="full-width"></ru-button>
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
        <ru-button icon="code" label="standard"></ru-button>
        <ru-button outlined icon="code" label="outlined"></ru-button>
        <ru-button raised icon="code" label="raised"></ru-button>
        <ru-button
          raised
          icon="code"
          label="raised-disabled"
          disabled
        ></ru-button>
        <ru-button unelevated icon="code" label="unelevated"></ru-button>
        <ru-button
          unelevated
          icon="code"
          label="unelevated-disabled"
          disabled
        ></ru-button>
      </div>

      <style data-pre="text">
        .text {
          --mdc-typography-button-text-transform: lowercase;
          --mdc-typography-button-letter-spacing: 4px;
        }
      </style>
      <pre id="text"></pre>
      <div class="demo-group wrap text">
        <ru-button icon="code" label="lowerspace"></ru-button>
        <ru-button outlined icon="code" label="lowerspace"></ru-button>
        <ru-button raised icon="code" label="lowerspace"></ru-button>
        <ru-button unelevated icon="code" label="lowerspace"></ru-button>
      </div>

      <style data-pre="horizontal-padding">
        .horizontal-padding {
          --mdc-button-horizontal-padding: 50px;
        }
      </style>
      <pre id="horizontal-padding"></pre>
      <div class="demo-group wrap horizontal-padding">
        <ru-button icon="code" label="padding"></ru-button>
        <ru-button outlined icon="code" label="padding"></ru-button>
        <ru-button raised icon="code" label="padding"></ru-button>
        <ru-button unelevated icon="code" label="padding"></ru-button>
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
        <ru-button
          outlined
          class="themed"
          icon="code"
          label="themed"
        ></ru-button>
        <ru-button
          outlined
          class="themed"
          disabled
          icon="code"
          label="themed"
        ></ru-button>
        <ru-button
          outlined
          class="outline-different"
          icon="code"
          label="outline-different"
        ></ru-button>
        <ru-button
          outlined
          class="outline-different"
          disabled
          icon="code"
          label="outline-different"
        ></ru-button>
        <ru-button outlined class="width" icon="code" label="width"></ru-button>
        <ru-button
          outlined
          class="width"
          disabled
          icon="code"
          label="width"
        ></ru-button>
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
