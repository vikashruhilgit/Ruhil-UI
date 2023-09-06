import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Tab',
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
  <ru-tab-bar>
    <ru-tab label="one"></ru-tab>
    <ru-tab label="two"></ru-tab>
    <ru-tab label="three"></ru-tab>
  </ru-tab-bar>

  <h3>Fading indicator</h3>
  <ru-tab-bar>
    <ru-tab label="one" isFadingIndicator></ru-tab>
    <ru-tab label="two" isFadingIndicator></ru-tab>
    <ru-tab label="three" isFadingIndicator></ru-tab>
  </ru-tab-bar>

  <h3>Min Width Tab</h3>
  <ru-tab-bar>
    <ru-tab label="one" minWidth></ru-tab>
    <ru-tab label="two" minWidth></ru-tab>
    <ru-tab label="three" minWidth></ru-tab>
  </ru-tab-bar>

  <h3>Min Width Indicator</h3>
  <ru-tab-bar>
    <ru-tab label="one" isMinWidthIndicator></ru-tab>
    <ru-tab label="two" isMinWidthIndicator></ru-tab>
    <ru-tab label="three" isMinWidthIndicator></ru-tab>
  </ru-tab-bar>

  <h3>Min Width Tab - Min Width Indicator</h3>
  <ru-tab-bar>
    <ru-tab label="one" minWidth isMinWidthIndicator></ru-tab>
    <ru-tab label="two" minWidth isMinWidthIndicator></ru-tab>
    <ru-tab label="three" minWidth isMinWidthIndicator></ru-tab>
  </ru-tab-bar>

  <h3>With Icons</h3>
  <ru-tab-bar activeIndex="2">
    <ru-tab label="one" icon="accessibility"></ru-tab>
    <ru-tab label="two" icon="exit_to_app"></ru-tab>
    <ru-tab label="three" icon="camera"></ru-tab>
  </ru-tab-bar>

  <h3>Only Icons</h3>
  <ru-tab-bar activeIndex="2">
    <ru-tab icon="accessibility"></ru-tab>
    <ru-tab icon="exit_to_app"></ru-tab>
    <ru-tab icon="camera"></ru-tab>
  </ru-tab-bar>

  <h3>Image Icons</h3>
  <ru-tab-bar activeIndex="2">
    <ru-tab hasImageIcon>
      <svg slot="icon" width="10px" height="10px">
        <circle r="5px" cx="5px" cy="5px" color="red"></circle>
      </svg>
    </ru-tab>
    <ru-tab hasImageIcon>
      <svg slot="icon" width="10px" height="10px">
        <rect width="10px" height="10px" color="green"></rect>
      </svg>
    </ru-tab>
    <ru-tab hasImageIcon>
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
    </ru-tab>
  </ru-tab-bar>

  <h3>With Icons - Stacked</h3>
  <ru-tab-bar activeIndex="1">
    <ru-tab label="one" icon="accessibility" stacked></ru-tab>
    <ru-tab label="two" icon="exit_to_app" stacked></ru-tab>
    <ru-tab label="three" icon="camera" stacked></ru-tab>
  </ru-tab-bar>

  <h3>With Icons - Stacked - Min Width Indicator</h3>
  <ru-tab-bar>
    <ru-tab
      label="one"
      icon="accessibility"
      stacked
      isMinWidthIndicator
    ></ru-tab>
    <ru-tab label="two" icon="exit_to_app" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="three" icon="camera" stacked isMinWidthIndicator></ru-tab>
  </ru-tab-bar>

  <h3>Scrolling</h3>
  <ru-tab-bar>
    <ru-tab label="one"></ru-tab>
    <ru-tab label="two"></ru-tab>
    <ru-tab label="three"></ru-tab>
    <ru-tab label="four"></ru-tab>
    <ru-tab label="five"></ru-tab>
    <ru-tab label="six"></ru-tab>
    <ru-tab label="seven"></ru-tab>
    <ru-tab label="eight"></ru-tab>
    <ru-tab label="nine"></ru-tab>
    <ru-tab label="ten"></ru-tab>
  </ru-tab-bar>

  <h3>Scrolling - Width Icons - Stacked - Min Width Indicator</h3>
  <ru-tab-bar>
    <ru-tab label="one" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="two" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="three" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="four" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="five" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="six" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="seven" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="eight" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="nine" icon="camera" stacked isMinWidthIndicator></ru-tab>
    <ru-tab label="ten" icon="camera" stacked isMinWidthIndicator></ru-tab>
  </ru-tab-bar>

  <h3>Icon indicator</h3>
  <ru-tab-bar>
    <ru-tab
      icon="camera"
      isFadingIndicator
      indicatorIcon="donut_large"
    ></ru-tab>
    <ru-tab
      icon="accessibility"
      isFadingIndicator
      indicatorIcon="donut_large"
    ></ru-tab>
    <ru-tab
      icon="exit_to_app"
      isFadingIndicator
      indicatorIcon="donut_large"
    ></ru-tab>
  </ru-tab-bar>
</main>`;

export const Tab = Template.bind({});
Tab.args = {};
