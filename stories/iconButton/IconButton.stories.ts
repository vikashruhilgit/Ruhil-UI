import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/IconButton',
  argTypes: {
    color: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  icon: string;
  disabled: boolean;
  color: string;
}

const TemplateDefault: Story<ArgTypes> = ({
  icon,
  disabled,
  color,
}: ArgTypes) =>
  html`
    <style>
      ft-icon-button {
        padding: 20px;
      }
      .color {
        color: ${color};
      }
    </style>
    <main>
      <ft-icon-button .icon=${icon}></ft-icon-button>
      <ft-icon-button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
      </ft-icon-button>
      <ft-icon-button icon="code" .disabled=${disabled}></ft-icon-button>
      <ft-icon-button icon="code" class="color"></ft-icon-button>
    </main>
  `;

export const IconButton = TemplateDefault.bind({});
IconButton.args = {
  icon: 'favorite',
  disabled: true,
  color: 'tomato',
};
