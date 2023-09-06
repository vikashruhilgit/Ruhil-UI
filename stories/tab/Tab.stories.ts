import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Firstech UI/Component/Tab',
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

const Template: Story<ArgTypes> = () => html` <main>
  <ft-tab-bar>
    <ft-tab label="one"></ft-tab>
    <ft-tab label="two"></ft-tab>
    <ft-tab label="three"></ft-tab>
  </ft-tab-bar>

  <h3>Fading indicator</h3>
  <ft-tab-bar>
    <ft-tab label="one" isFadingIndicator></ft-tab>
    <ft-tab label="two" isFadingIndicator></ft-tab>
    <ft-tab label="three" isFadingIndicator></ft-tab>
  </ft-tab-bar>

  <h3>Min Width Tab</h3>
  <ft-tab-bar>
    <ft-tab label="one" minWidth></ft-tab>
    <ft-tab label="two" minWidth></ft-tab>
    <ft-tab label="three" minWidth></ft-tab>
  </ft-tab-bar>

  <h3>Min Width Indicator</h3>
  <ft-tab-bar>
    <ft-tab label="one" isMinWidthIndicator></ft-tab>
    <ft-tab label="two" isMinWidthIndicator></ft-tab>
    <ft-tab label="three" isMinWidthIndicator></ft-tab>
  </ft-tab-bar>

  <h3>Min Width Tab - Min Width Indicator</h3>
  <ft-tab-bar>
    <ft-tab label="one" minWidth isMinWidthIndicator></ft-tab>
    <ft-tab label="two" minWidth isMinWidthIndicator></ft-tab>
    <ft-tab label="three" minWidth isMinWidthIndicator></ft-tab>
  </ft-tab-bar>

  <h3>With Icons</h3>
  <ft-tab-bar activeIndex="2">
    <ft-tab label="one" icon="accessibility"></ft-tab>
    <ft-tab label="two" icon="exit_to_app"></ft-tab>
    <ft-tab label="three" icon="camera"></ft-tab>
  </ft-tab-bar>

  <h3>Only Icons</h3>
  <ft-tab-bar activeIndex="2">
    <ft-tab icon="accessibility"></ft-tab>
    <ft-tab icon="exit_to_app"></ft-tab>
    <ft-tab icon="camera"></ft-tab>
  </ft-tab-bar>

  <h3>Image Icons</h3>
  <ft-tab-bar activeIndex="2">
    <ft-tab hasImageIcon>
      <svg slot="icon" width="10px" height="10px">
        <circle r="5px" cx="5px" cy="5px" color="red"></circle>
      </svg>
    </ft-tab>
    <ft-tab hasImageIcon>
      <svg slot="icon" width="10px" height="10px">
        <rect width="10px" height="10px" color="green"></rect>
      </svg>
    </ft-tab>
    <ft-tab hasImageIcon>
      <svg slot="icon" width="14.143px" height="14.143px">
        <rect
          width="10px"
          height="10px"
          color="blue"
          y="2.071px"
          x="2.071px"
          style="transform:rotate(45deg);transform-origin:center;"
        ></rect>
      </svg>
    </ft-tab>
  </ft-tab-bar>

  <h3>With Icons - Stacked</h3>
  <ft-tab-bar activeIndex="1">
    <ft-tab label="one" icon="accessibility" stacked></ft-tab>
    <ft-tab label="two" icon="exit_to_app" stacked></ft-tab>
    <ft-tab label="three" icon="camera" stacked></ft-tab>
  </ft-tab-bar>

  <h3>With Icons - Stacked - Min Width Indicator</h3>
  <ft-tab-bar>
    <ft-tab
      label="one"
      icon="accessibility"
      stacked
      isMinWidthIndicator
    ></ft-tab>
    <ft-tab label="two" icon="exit_to_app" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="three" icon="camera" stacked isMinWidthIndicator></ft-tab>
  </ft-tab-bar>

  <h3>Scrolling</h3>
  <ft-tab-bar>
    <ft-tab label="one"></ft-tab>
    <ft-tab label="two"></ft-tab>
    <ft-tab label="three"></ft-tab>
    <ft-tab label="four"></ft-tab>
    <ft-tab label="five"></ft-tab>
    <ft-tab label="six"></ft-tab>
    <ft-tab label="seven"></ft-tab>
    <ft-tab label="eight"></ft-tab>
    <ft-tab label="nine"></ft-tab>
    <ft-tab label="ten"></ft-tab>
  </ft-tab-bar>

  <h3>Scrolling - Width Icons - Stacked - Min Width Indicator</h3>
  <ft-tab-bar>
    <ft-tab label="one" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="two" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="three" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="four" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="five" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="six" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="seven" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="eight" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="nine" icon="camera" stacked isMinWidthIndicator></ft-tab>
    <ft-tab label="ten" icon="camera" stacked isMinWidthIndicator></ft-tab>
  </ft-tab-bar>

  <h3>Icon indicator</h3>
  <ft-tab-bar>
    <ft-tab
      icon="camera"
      isFadingIndicator
      indicatorIcon="donut_large"
    ></ft-tab>
    <ft-tab
      icon="accessibility"
      isFadingIndicator
      indicatorIcon="donut_large"
    ></ft-tab>
    <ft-tab
      icon="exit_to_app"
      isFadingIndicator
      indicatorIcon="donut_large"
    ></ft-tab>
  </ft-tab-bar>
</main>`;

export const Tab = Template.bind({});
Tab.args = {};
