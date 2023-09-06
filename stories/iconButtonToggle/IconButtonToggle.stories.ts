import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/IconButtonToggle',
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
  onIcon: string;
  offIcon: string;
  disabled: boolean;
  color: string;
}

const Template: Story<ArgTypes> = ({
  onIcon,
  offIcon,
  disabled,
  color,
}: ArgTypes) =>
  html`
    <style>
      ft-icon-button-toggle {
        padding: 20px;
      }
      .color {
        color: ${color};
      }
    </style>
    <main>
      <ft-icon-button-toggle
        .on=${true}
        .onIcon=${onIcon}
        .offIcon=${offIcon}
      ></ft-icon-button-toggle>

      <ft-icon-button-toggle>
        <svg
          slot="onIcon"
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
        <svg
          slot="offIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
          <path
            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          />
        </svg>
      </ft-icon-button-toggle>

      <ft-icon-button-toggle>
        <img alt="" slot="onIcon" src="https://picsum.photos/id/28/24/24" />
        <img
          alt=""
          slot="offIcon"
          src="https://picsum.photos/id/141/24/24?grayscale"
        />
      </ft-icon-button-toggle>

      <ft-icon-button-toggle
        ?disabled=${disabled}
        onIcon="sentiment_very_satisfied"
        offIcon="sentiment_very_dissatisfied"
      ></ft-icon-button-toggle>

      <ft-icon-button-toggle
        class="color"
        onIcon="sentiment_very_satisfied"
        offIcon="sentiment_very_dissatisfied"
      ></ft-icon-button-toggle>
    </main>
  `;

export const IconButtonToggle = Template.bind({});
IconButtonToggle.args = {
  onIcon: 'sentiment_very_satisfied',
  offIcon: 'sentiment_very_dissatisfied',
  disabled: true,
  color: 'tomato',
};
